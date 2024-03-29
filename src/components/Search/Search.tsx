import { Container, SearchBox, Input } from "./Style";
import search from "../../assets/imgs/search.png";
import { useEffect, useState } from "react";
import { epilPostType, postType, donationType } from "utils/types";
import * as postapi from "api/post";
import * as memberapi from "api/member";

interface propsType {
    donaPosts?: postType[] | undefined;
    epilPosts?: epilPostType[] | undefined;
    donations?: donationType[] | undefined;
    setFilteredPosts: React.Dispatch<React.SetStateAction<any>>;
}

const Search = ({
    donaPosts,
    epilPosts,
    donations,
    setFilteredPosts,
}: propsType) => {
    const [text, setText] = useState<string>("");
    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    // const getUser = (id: number) => {

    //     return user;
    // };
    const getPost = async (id: number) => {
        const post = await postapi.ViewApi(id);
        return post;
    };
    const filterDonaPosts = (donaPosts: (postType | undefined)[]) => {
        const foundPosts = donaPosts.slice().filter((post) => {
            if (post) {
                return (
                    // post.title.includes(text) ||
                    // getUser(post.uploader_id).nickname.includes(text)
                    true
                );
            } else {
                return false;
            }
        });
        return foundPosts;
    };
    const filterEpilPosts = async (epilPosts: epilPostType[]) => {
        //epilPosts에 해당하는 donaPosts를 가져와서 검색에 사용한다.
        let donaPosts = await Promise.all(
            epilPosts?.map((it) => getPost(it.postId))
        );
        const foundDonaPosts = filterDonaPosts(donaPosts);
        const foundEpilPosts = epilPosts.slice().filter((it) => {
            const match = foundDonaPosts.slice().filter((donaPost) => {
                if (donaPost) {
                    return it.postId == donaPost.post_id;
                } else return false;
            });
            if (match.length == 1) {
                return true;
            } else {
                return false;
            }
        });

        return foundEpilPosts;
    };
    const filteredDonations = async (donations: donationType[]) => {
        //donations에 해당하는 donaPosts를 가져와서 검색에 사용한다.
        let donaPosts = await Promise.all(
            donations?.map((it) => getPost(it.post_id))
        );
        const foundDonaPosts = filterDonaPosts(donaPosts);
        const founDonations = donations.slice().filter((it) => {
            const match = foundDonaPosts.slice().filter((donaPost) => {
                if (donaPost) {
                    return it.post_id == donaPost.post_id;
                } else return false;
            });
            if (match.length == 1) {
                return true;
            } else {
                return false;
            }
        });
        return founDonations;
    };

    useEffect(() => {
        const getfilteredEpilPosts = async (epilPosts: epilPostType[]) => {
            const res = await filterEpilPosts(epilPosts);
            setFilteredPosts(res);
        };
        const getfilteredDonations = async (donations: donationType[]) => {
            const res = await filteredDonations(donations);
            setFilteredPosts(res);
        };

        if (donaPosts) {
            setFilteredPosts(filterDonaPosts(donaPosts));
        }
        if (epilPosts) {
            getfilteredEpilPosts(epilPosts);
        }
        if (donations) {
            getfilteredDonations(donations);
        }
    }, [text]);

    return (
        <Container>
            <SearchBox>
                <img src={search}></img>
                <Input
                    type="text"
                    placeholder="모금글, 구조자를 검색하세요"
                    value={text}
                    onChange={handleText}
                ></Input>
            </SearchBox>
        </Container>
    );
};

export default Search;
