import React, { useRef, useState, useEffect } from "react";

export default function UserefHook() {
  //eg1
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // eg3

  const [newProductImg, setNewProductImage] = useState(true);
  const [imgeURL, setImageURL] = useState("");
  const imgRef = useRef(0);

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProductImage(false);
    }
  };
  // console.log(imgeURL);

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" placeholder="Enter name" ref={inputRef} />
        <button onClick={focusInput}>Focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <p>Timer : {sec}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </nav>
      {/* eg3 */}
      <input type="file" ref={imgRef} hidden onChange={handleImg} />
      {newProductImg ? (
        <div className="img-box" onClick={() => imgRef.current.click()}>
          Update Image
        </div>
      ) : (
        <img
          className="img-box2"
          onClick={() => imgRef.current.click()}
          src={imgeURL}
        />
      )}
    </div>
  );
}
