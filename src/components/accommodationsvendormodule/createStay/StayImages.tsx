import React, { useRef, useState } from 'react';

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
}

const StayImages = () => {
    const [outsideImages, setOutsideImages] = useState<UploadedImage[]>([]);
    const [interiorImages, setInteriorImages] = useState<UploadedImage[]>([]);
    const [bathroomImages, setBathroomImages] = useState<UploadedImage[]>([]);
    const [additionalImages, setAdditionalImages] = useState<UploadedImage[]>([]);
  
    const outsideInputRef = useRef<HTMLInputElement>(null);
    const interiorInputRef = useRef<HTMLInputElement>(null);
    const bathroomInputRef = useRef<HTMLInputElement>(null);
    const additionalInputRef = useRef<HTMLInputElement>(null);
  
    const handleImageUpload = (
      files: FileList | null,
      setImages: React.Dispatch<React.SetStateAction<UploadedImage[]>>
    ) => {
      if (!files) return;
  
      const newImages: UploadedImage[] = Array.from(files).map((file) => ({
        id: URL.createObjectURL(file),
        file,
        preview: URL.createObjectURL(file),
      }));
  
      setImages((prev) => [...prev, ...newImages]);
    };
  
    const handleRemoveImage = (
      id: string,
      setImages: React.Dispatch<React.SetStateAction<UploadedImage[]>>
    ) => {
      setImages((prev) => prev.filter((img) => img.id !== id));
    };
  
    return (
      <div className='vehicle-images-sec stayImagesModal'>
  
        {/* Outside Images Section */}
        <div className='vechicle-box'>
          <h3>Exterior images</h3>
          <div className='form-box d-flex flex-wrap gap-3'>
            {outsideImages.map((img) => (
              <div key={img.id} className='image-box position-relative'>
                <img src={img.preview} alt='Preview' className='uploaded-img' />
                <button
                  className='remove-btn'
                  onClick={() => handleRemoveImage(img.id, setOutsideImages)}
                >
                  ×
                </button>
              </div>
            ))}
            <div
              className='upload-box text-center'
              onClick={() => outsideInputRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                handleImageUpload(e.dataTransfer.files, setOutsideImages);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.9998C1.95 15.9998 1.47933 15.8042 1.088 15.4128C0.696666 15.0215 0.500667 14.5505 0.5 13.9998V11.9998C0.5 11.7165 0.596 11.4792 0.788 11.2878C0.98 11.0965 1.21733 11.0005 1.5 10.9998C1.78267 10.9992 2.02033 11.0952 2.213 11.2878C2.40567 11.4805 2.50133 11.7178 2.5 11.9998V13.9998H14.5V11.9998C14.5 11.7165 14.596 11.4792 14.788 11.2878C14.98 11.0965 15.2173 11.0005 15.5 10.9998C15.7827 10.9992 16.0203 11.0952 16.213 11.2878C16.4057 11.4805 16.5013 11.7178 16.5 11.9998V13.9998C16.5 14.5498 16.3043 15.0208 15.913 15.4128C15.5217 15.8048 15.0507 16.0005 14.5 15.9998H2.5ZM7.5 3.84982L5.625 5.72482C5.425 5.92482 5.18767 6.02082 4.913 6.01282C4.63833 6.00482 4.40067 5.90049 4.2 5.69982C4.01667 5.49982 3.92067 5.26649 3.912 4.99982C3.90333 4.73315 3.99933 4.49982 4.2 4.29982L7.8 0.69982C7.9 0.59982 8.00833 0.529153 8.125 0.48782C8.24167 0.446486 8.36667 0.425487 8.5 0.42482C8.63333 0.424153 8.75833 0.445153 8.875 0.48782C8.99167 0.530486 9.1 0.601153 9.2 0.69982L12.8 4.29982C13 4.49982 13.096 4.73315 13.088 4.99982C13.08 5.26649 12.984 5.49982 12.8 5.69982C12.6 5.89982 12.3627 6.00415 12.088 6.01282C11.8133 6.02149 11.5757 5.92549 11.375 5.72482L9.5 3.84982V10.9998C9.5 11.2832 9.404 11.5208 9.212 11.7128C9.02 11.9048 8.78267 12.0005 8.5 11.9998C8.21733 11.9992 7.98 11.9032 7.788 11.7118C7.596 11.5205 7.5 11.2832 7.5 10.9998V3.84982Z" fill="#838383"/></svg>
  
                Click To Upload Media File<br />Or Drag And Drop Your File Here…
              </div>
              <input
                type='file'
                accept='image/*'
                multiple
                ref={outsideInputRef}
                style={{ display: 'none' }}
                onChange={(e) => handleImageUpload(e.target.files, setOutsideImages)}
              />
            </div>
          </div>
        </div>
  
        {/* Interior Images Section */}
        <div className='vechicle-box'>
          <h3>Bedroom images</h3>
          <div className='form-box d-flex flex-wrap gap-3'>
            {interiorImages.map((img) => (
              <div key={img.id} className='image-box position-relative'>
                <img src={img.preview} alt='Preview' className='uploaded-img' />
                <button
                  className='remove-btn'
                  onClick={() => handleRemoveImage(img.id, setInteriorImages)}
                >
                  ×
                </button>
              </div>
            ))}
            <div
              className='upload-box text-center'
              onClick={() => interiorInputRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                handleImageUpload(e.dataTransfer.files, setInteriorImages);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.9998C1.95 15.9998 1.47933 15.8042 1.088 15.4128C0.696666 15.0215 0.500667 14.5505 0.5 13.9998V11.9998C0.5 11.7165 0.596 11.4792 0.788 11.2878C0.98 11.0965 1.21733 11.0005 1.5 10.9998C1.78267 10.9992 2.02033 11.0952 2.213 11.2878C2.40567 11.4805 2.50133 11.7178 2.5 11.9998V13.9998H14.5V11.9998C14.5 11.7165 14.596 11.4792 14.788 11.2878C14.98 11.0965 15.2173 11.0005 15.5 10.9998C15.7827 10.9992 16.0203 11.0952 16.213 11.2878C16.4057 11.4805 16.5013 11.7178 16.5 11.9998V13.9998C16.5 14.5498 16.3043 15.0208 15.913 15.4128C15.5217 15.8048 15.0507 16.0005 14.5 15.9998H2.5ZM7.5 3.84982L5.625 5.72482C5.425 5.92482 5.18767 6.02082 4.913 6.01282C4.63833 6.00482 4.40067 5.90049 4.2 5.69982C4.01667 5.49982 3.92067 5.26649 3.912 4.99982C3.90333 4.73315 3.99933 4.49982 4.2 4.29982L7.8 0.69982C7.9 0.59982 8.00833 0.529153 8.125 0.48782C8.24167 0.446486 8.36667 0.425487 8.5 0.42482C8.63333 0.424153 8.75833 0.445153 8.875 0.48782C8.99167 0.530486 9.1 0.601153 9.2 0.69982L12.8 4.29982C13 4.49982 13.096 4.73315 13.088 4.99982C13.08 5.26649 12.984 5.49982 12.8 5.69982C12.6 5.89982 12.3627 6.00415 12.088 6.01282C11.8133 6.02149 11.5757 5.92549 11.375 5.72482L9.5 3.84982V10.9998C9.5 11.2832 9.404 11.5208 9.212 11.7128C9.02 11.9048 8.78267 12.0005 8.5 11.9998C8.21733 11.9992 7.98 11.9032 7.788 11.7118C7.596 11.5205 7.5 11.2832 7.5 10.9998V3.84982Z" fill="#838383"/></svg>
              
                Click To Upload Media File<br />Or Drag And Drop Your File Here…
              </div>
              <input
                type='file'
                accept='image/*'
                multiple
                ref={interiorInputRef}
                style={{ display: 'none' }}
                onChange={(e) => handleImageUpload(e.target.files, setInteriorImages)}
              />
            </div>
          </div>
        </div>
        
  
        {/* Interior Images Section */}
        <div className='vechicle-box'>
          <h3>Bathroom Images</h3>
          <div className='form-box d-flex flex-wrap gap-3'>
            {bathroomImages.map((img) => (
              <div key={img.id} className='image-box position-relative'>
                <img src={img.preview} alt='Preview' className='uploaded-img' />
                <button
                  className='remove-btn'
                  onClick={() => handleRemoveImage(img.id, setBathroomImages)}
                >
                  ×
                </button>
              </div>
            ))}
            <div
              className='upload-box text-center'
              onClick={() => bathroomInputRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                handleImageUpload(e.dataTransfer.files, setBathroomImages);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.9998C1.95 15.9998 1.47933 15.8042 1.088 15.4128C0.696666 15.0215 0.500667 14.5505 0.5 13.9998V11.9998C0.5 11.7165 0.596 11.4792 0.788 11.2878C0.98 11.0965 1.21733 11.0005 1.5 10.9998C1.78267 10.9992 2.02033 11.0952 2.213 11.2878C2.40567 11.4805 2.50133 11.7178 2.5 11.9998V13.9998H14.5V11.9998C14.5 11.7165 14.596 11.4792 14.788 11.2878C14.98 11.0965 15.2173 11.0005 15.5 10.9998C15.7827 10.9992 16.0203 11.0952 16.213 11.2878C16.4057 11.4805 16.5013 11.7178 16.5 11.9998V13.9998C16.5 14.5498 16.3043 15.0208 15.913 15.4128C15.5217 15.8048 15.0507 16.0005 14.5 15.9998H2.5ZM7.5 3.84982L5.625 5.72482C5.425 5.92482 5.18767 6.02082 4.913 6.01282C4.63833 6.00482 4.40067 5.90049 4.2 5.69982C4.01667 5.49982 3.92067 5.26649 3.912 4.99982C3.90333 4.73315 3.99933 4.49982 4.2 4.29982L7.8 0.69982C7.9 0.59982 8.00833 0.529153 8.125 0.48782C8.24167 0.446486 8.36667 0.425487 8.5 0.42482C8.63333 0.424153 8.75833 0.445153 8.875 0.48782C8.99167 0.530486 9.1 0.601153 9.2 0.69982L12.8 4.29982C13 4.49982 13.096 4.73315 13.088 4.99982C13.08 5.26649 12.984 5.49982 12.8 5.69982C12.6 5.89982 12.3627 6.00415 12.088 6.01282C11.8133 6.02149 11.5757 5.92549 11.375 5.72482L9.5 3.84982V10.9998C9.5 11.2832 9.404 11.5208 9.212 11.7128C9.02 11.9048 8.78267 12.0005 8.5 11.9998C8.21733 11.9992 7.98 11.9032 7.788 11.7118C7.596 11.5205 7.5 11.2832 7.5 10.9998V3.84982Z" fill="#838383"/></svg>
              
                Click To Upload Media File<br />Or Drag And Drop Your File Here…
              </div>
              <input
                type='file'
                accept='image/*'
                multiple
                ref={bathroomInputRef}
                style={{ display: 'none' }}
                onChange={(e) => handleImageUpload(e.target.files, setBathroomImages)}
              />
            </div>
          </div>
        </div>
  

        {/* Interior Images Section */}
        <div className='vechicle-box'>
          <h3>Additional Images</h3>
          <div className='form-box d-flex flex-wrap gap-3'>
            {additionalImages.map((img) => (
              <div key={img.id} className='image-box position-relative'>
                <img src={img.preview} alt='Preview' className='uploaded-img' />
                <button
                  className='remove-btn'
                  onClick={() => handleRemoveImage(img.id, setAdditionalImages)}
                >
                  ×
                </button>
              </div>
            ))}
            <div
              className='upload-box text-center'
              onClick={() => additionalInputRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                handleImageUpload(e.dataTransfer.files, setAdditionalImages);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.9998C1.95 15.9998 1.47933 15.8042 1.088 15.4128C0.696666 15.0215 0.500667 14.5505 0.5 13.9998V11.9998C0.5 11.7165 0.596 11.4792 0.788 11.2878C0.98 11.0965 1.21733 11.0005 1.5 10.9998C1.78267 10.9992 2.02033 11.0952 2.213 11.2878C2.40567 11.4805 2.50133 11.7178 2.5 11.9998V13.9998H14.5V11.9998C14.5 11.7165 14.596 11.4792 14.788 11.2878C14.98 11.0965 15.2173 11.0005 15.5 10.9998C15.7827 10.9992 16.0203 11.0952 16.213 11.2878C16.4057 11.4805 16.5013 11.7178 16.5 11.9998V13.9998C16.5 14.5498 16.3043 15.0208 15.913 15.4128C15.5217 15.8048 15.0507 16.0005 14.5 15.9998H2.5ZM7.5 3.84982L5.625 5.72482C5.425 5.92482 5.18767 6.02082 4.913 6.01282C4.63833 6.00482 4.40067 5.90049 4.2 5.69982C4.01667 5.49982 3.92067 5.26649 3.912 4.99982C3.90333 4.73315 3.99933 4.49982 4.2 4.29982L7.8 0.69982C7.9 0.59982 8.00833 0.529153 8.125 0.48782C8.24167 0.446486 8.36667 0.425487 8.5 0.42482C8.63333 0.424153 8.75833 0.445153 8.875 0.48782C8.99167 0.530486 9.1 0.601153 9.2 0.69982L12.8 4.29982C13 4.49982 13.096 4.73315 13.088 4.99982C13.08 5.26649 12.984 5.49982 12.8 5.69982C12.6 5.89982 12.3627 6.00415 12.088 6.01282C11.8133 6.02149 11.5757 5.92549 11.375 5.72482L9.5 3.84982V10.9998C9.5 11.2832 9.404 11.5208 9.212 11.7128C9.02 11.9048 8.78267 12.0005 8.5 11.9998C8.21733 11.9992 7.98 11.9032 7.788 11.7118C7.596 11.5205 7.5 11.2832 7.5 10.9998V3.84982Z" fill="#838383"/></svg>
              
                Click To Upload Media File<br />Or Drag And Drop Your File Here…
              </div>
              <input
                type='file'
                accept='image/*'
                multiple
                ref={additionalInputRef}
                style={{ display: 'none' }}
                onChange={(e) => handleImageUpload(e.target.files, setAdditionalImages)}
              />
            </div>
          </div>
        </div>

      </div>
  )
}

export default StayImages