import React, { useState } from 'react';

function ImageUploadButton() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    try {
      // Get temporary API key
      const tempKeyRes = await fetch("/api/keys", { method: "GET" });
      const tempKeyData = await tempKeyRes.json();

      // FormData to hold the file to upload
      const formData = new FormData();
      formData.append("file", image);

      // Upload the image to Pinata
      const uploadRes = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tempKeyData.JWT}`,
        },
        body: formData,
      });

      const uploadResJson = await uploadRes.json();
      const fileCID = uploadResJson.IpfsHash;
      // Process the fileCID to generate imageUrl, and use this URL in your frame format
      
      // Delete temporary API key
      await fetch("/api/keys", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiKey: tempKeyData.pinata_api_key }),
      });

    } catch (error) {
      console.error('Error during file upload:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default ImageUploadButton;
