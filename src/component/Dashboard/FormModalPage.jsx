
// FormModalPage.js

import { useLocation } from 'react-router-dom';
import FormModal from './FormModal';

function FormModalPage() {
  const location = useLocation();

  console.log('Location object:', location); 

  console.log(location.state)
  const formData = location.state ? location.state.formData : null;

  return (
    <div>
      {/* Render FormModal with the received formData */}
      <FormModal isOpen={true} setIsOpen={() => {}} forms={formData} />
    </div>
  );
}

export default FormModalPage;
