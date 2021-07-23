import "./writePage.css";

export default function WritePage() {
  return (
    <div className="writePage">
      <img
        src="https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        className="writeImg"
        alt=""
      />

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writePageIcon fas fa-plus"></i>
          </label>
          {/* display:none  */}
          <input type="file" id="fileInput" className="fileInput" />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
          <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  );
}
