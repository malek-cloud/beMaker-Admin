import React from "react";
import axios from "axios";
import "./marketing.css";
import DeleteMarketing from "./deleteMarketing";
import { useRef, useState, useEffect } from "react";
function Marketing() {
  const nom = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [marketingData, setMarketingData] = useState(false);
  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };

    fileReader.readAsDataURL(selectedFile);
  }, [selectedFile]);
  const submit = async () => {
    setLoader(true);
    try {
      const fd = new FormData();
      fd.append("name", nom.current.value);
      fd.append("image", selectedFile);
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + `shop/createMarketingImage`,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.status;
      if (data === 200) {
        setLoader(false);
        window.location.reload(true);
        setPreview(true);
      }
      console.log("hedhy el donne : " + data);
    } catch (err) {
      console.log("erreur mateb3athch el projet raw" + err);
    }
  };
  useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "shop/MarketingImages",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      setMarketingData(resp.data.marketing);
      setLoader2(false);
    });
  }, []);
  return (
    <div className="marketingComponent">
      <div className="addMarketing">
        <div className="addMarketingTitle">
          {" "}
          Ajouter une nouvelle image de marketing pour le store
        </div>
        <div className="nomPubComponent">
          <div className="nameOfpub">
            Nom d'identification de la publicité :
          </div>
          <input
            type="text"
            className="marketingName"
            placeholder=". . . . . . . . . . . . . . . . . . . . . . . ."
            ref={nom}
          />
        </div>
        <div className="choosePubFile">
          <div className="imagedePub">Image du publicité :</div>
          <input type="file" onChange={fileSelectedHandler} />
        </div>
        {preview && (
          <img className="imageModalMarketing" src={preview} alt="Preview" />
        )}
        {!preview && (
          <img
            className="imageModalMarketing"
            src="/images/pick.png"
            alt="Pick"
          />
        )}
        {loader ? (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          <div className="createPubButton" onClick={submit}>
            Créer
          </div>
        )}
      </div>


      <div className="allMarketing">
            <div className="storeedMarketingTitle">Les publicités du store</div>
        <div className="marketingItems">
        {loader2 ? (
          <div className="spinner-border" role="status"></div>
        ) : (
          marketingData &&
          marketingData.map((e) => (
            <div key={e._id} className="oneMarketingPiece">
              <div className="nameOfStoreMarketing">{e.name && e.name}</div>
              <img className="imageOfStoredMarketing" src={e.images && e.images.url} alt="publicité" />
            <DeleteMarketing id={e._id}/>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
}

export default Marketing;
