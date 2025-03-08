import api from "../../services/config";

function ImageFile({ setFile, formData, folder }) {
  const fileHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);
    api
      .post("/upload-file", formData)
      .then((res) => setFile((file) => ({ ...file, image: res })));
  };
  return (
    <>
      <label className="block font-bold text-md mb-1">Image</label>
      <div className="flex items-center gap-2">
        <div className="shrink-0">
          {formData.image && (
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={`${
                import.meta.env.VITE_SERVER_URL_FILES
              }/${folder}/resized/${formData.image}`}
              alt="Current profile photo"
            />
          )}
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            name="image"
            type="file"
            onChange={fileHandler}
            className="block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-orange-50 file:text-orange-400
hover:file:bg-orange-100
"
          />
        </label>
      </div>
    </>
  );
}

export default ImageFile;
