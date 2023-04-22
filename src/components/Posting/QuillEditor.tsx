import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useMemo, useRef } from "react";
import UploadImage from "utils/S3";

interface propsType {
    setContents: React.Dispatch<React.SetStateAction<string>>;
}

const QuillEditor = ({ setContents }: propsType) => {
    const quillRef = useRef<ReactQuill>(null);

    const handleQuill = (cnts: string) => {
        setContents(cnts);
    };
    const imageHandler = () => {
        const input = document.createElement("input");
        //속성
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
        //onClick
        input.onchange = async () => {
            if (input.files && input.files.length > 0) {
                const img = input.files[0];
                //s3에 파일을 업로드하고 url을 받아온다.
                const url = await UploadImage({ img });

                //에디터에 img 파일을 넣어준다.
                if (quillRef && quillRef.current) {
                    const editor = quillRef.current.getEditor();
                    const range = editor.getSelection(); //현재 에디터의 커서 위치값
                    if (range) {
                        editor.insertEmbed(range.index, "image", url);
                    }
                }
            }
        };
    };

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ header: 1 }, { header: 2 }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }, "link"],
                    ["image"],
                    ["clean"],
                ],
                handlers: {
                    // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
                    image: imageHandler,
                },
            },
        };
    }, []);

    return (
        <div style={{ width: "50%", height: "100%" }}>
            <ReactQuill
                ref={quillRef}
                onChange={handleQuill}
                modules={modules}
            />
        </div>
    );
};

export default QuillEditor;
