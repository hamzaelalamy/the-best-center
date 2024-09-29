import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useDrivePicker from 'react-google-drive-picker';

const ApplicationForm = ({ jobTitle, onSubmit }) => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '',
    offre: jobTitle || '', // Default to passed jobTitle
    explication: ''
  });
  const [cvFile, setCvFile] = useState(null);
  const [cvFileUrl, setCvFileUrl] = useState(null);
  const [additionalFiles, setAdditionalFiles] = useState([]);
  const [pickerError, setPickerError] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const [openPicker] = useDrivePicker();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleGoogleDriveUpload = () => {
    openPicker({
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      developerKey: import.meta.env.VITE_GOOGLE_API_KEY,
      viewId: 'DOCS',
      supportDrives: true,
      multiselect: false,
      callbackFunction: (data) => {
        if (data.action === window.google.picker.Action.PICKED && data.docs && data.docs.length > 0) {
          const file = data.docs[0];
          const fileUrl = `https://drive.google.com/uc?export=view&id=${file.id}`;
          setCvFile(file);
          setCvFileUrl(fileUrl);
          document.getElementById('cvFileInput')?.reset();
        }
      },
      onError: (error) => {
        console.error("Google Picker Error:", error);
        setPickerError(error);
      }
    });
  };

  const handleCvUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
      setCvFileUrl(URL.createObjectURL(file));
    } else {
      alert("Veuillez télécharger un fichier PDF.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!cvFile) {
      alert("Veuillez télécharger votre CV en PDF pour continuer.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (cvFileUrl?.startsWith('https://drive.google.com/')) {
      data.append('cvUrl', cvFileUrl);
    } else {
      data.append('cv', cvFile);
    }

    additionalFiles.forEach(file => data.append('additionalFiles', file.url || file));

    try {
      const response = await axios.post('http://localhost:5555/api/application', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Form submitted successfully:', response.data);
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  useEffect(() => {
    if (pickerError) {
      alert("Google Picker encountered an error. Please try again later.");
    }
  }, [pickerError]);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  return (
      <div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">Formulaire de demande rapide</h2>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <button type="button" className="p-2 rounded-lg bg-transparent" onClick={handleGoogleDriveUpload}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
                   alt="Google Drive"
                   className="w-8 h-8" />
            </button>
            <label className="py-2 px-4 bg-orange-500 text-white rounded-lg cursor-pointer">
              Télécharger CV
              <input id="cvFileInput" type="file" accept="application/pdf" onChange={handleCvUpload} className="hidden" />
            </label>
          </div>
          {cvFile && (
              <div className="text-center">
                <a href={cvFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {cvFile.name || cvFile.title}
                </a>
              </div>
          )}
          <div className="text-center mt-4">
            <img
                src="https://res.cloudinary.com/drqovuycp/image/upload/v1724767803/7e1300ea-e8e4-4152-85dd-2956516c5783_lmm7ng.jpg"
                alt="Make Sure" className="inline-block w-8 h-8 mr-2"/>
            <span className="text-gray-700">Assurez-vous que votre fichier CV dans Google Drive a les bonnes permissions. </span>
            <button type="button" onClick={handleShowImage} className="text-blue-500 underline">
              Voir maintenant
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-4">
            {['prenom', 'nom', 'email', 'phone'].map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block text-gray-700 font-medium mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id={field} value={formData[field]} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
            ))}
            <div>
              <label htmlFor="offre" className="block text-gray-700 font-medium mb-2">Offre <span className="text-red-500">*</span></label>
              <input type="text" id="offre" value={formData.offre} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label htmlFor="explication" className="block text-gray-700 font-medium mb-2">Explication Supplémentaire</label>
              <textarea id="explication" value={formData.explication} onChange={handleInputChange} rows="4" className="w-full p-2 border border-gray-300 rounded" placeholder="Ajoutez des détails supplémentaires ici..."></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="py-2 px-4 bg-purple-500 text-white rounded-lg">Soumettre</button>
          </div>
        </form>

        {showImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="relative">
                <img src="https://res.cloudinary.com/drqovuycp/image/upload/v1724767803/7e1300ea-e8e4-4152-85dd-2956516c5783_lmm7ng.jpg"
                     alt="Make Sure Permissions" className="max-w-full max-h-full"/>
                <button onClick={handleCloseImage}
                        className="absolute top-0 right-0 mt-2 mr-2 bg-black text-white text-2xl font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  &times;
                </button>

              </div>
            </div>
        )}
      </div>
  );
};

export default ApplicationForm;
