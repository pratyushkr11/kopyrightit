import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { setUserId } from '../../../redux/actions/userAction';
import LiteraryWork from './LiteraryWork';
import LiteraryWork2 from './LiteraryWork2';
import LiteraryWork3 from './LiteraryWork3';
import LiteraryWorkUpload from './LiteraryWorkUpload';

const LiteraryForm = () => {
  const { selectedValue } = useParams(); // Get the selectedValue from URL parameter
  const dispatch = useDispatch(); // Get the dispatch function

  const userId = localStorage.getItem('userId');
  const id = userId


  useEffect(() => {
  }, [selectedValue]);

  // useEffect(() => {
  //   // Dispatch the userId to the Redux store
  //   dispatch(setUserId(userId));
  // }, [userId, dispatch]);

  const [data, setData] = useState({
    formType: selectedValue,
    form1: {
      option: "",
      name: "",
      name1: "",
      name2: "",
      mail: "",
      mobile: "",
      address: "",
      country: "India",
      state: "",
      city: "",
      zip: ""
    },
    form2: {
      isOriginalWork: "",
      workTranslation: "",
      workTranslationCopyright: "",
      workAdaption: "",
      workAdaptionCopyright: "",
    },
    form3: {
      particularsNatureOfWork: "",
      particularsClassOfWork: "",
      particularsDescription: "",
      particularsTitle: "",
      particularsLanguageOfWork: "",
      isAuthorAlive: "",
      particularsNameOfAuthor: "",
      particularsAddressOfAuthor: "",
      particularsNationalityOfAuthor: "",
      particularsDateOfDecease: ""
    },
    keyValue: {
      fileKey1: "",
      imageKey1: ""
    },
    userId: id, // Store the userId in your data object
  });

  const [tab, setTab] = useState(0);

  return (
    <div>
      {/* Render your components based on the tab state */}
      {tab === 0 && <LiteraryWork tab={tab} setTab={setTab} data={data} setData={setData} />}
      {tab === 1 && <LiteraryWork2 tab={tab} setTab={setTab} data={data} setData={setData} answer={"no"} />}
      {tab === 2 && <LiteraryWork3 tab={tab} setTab={setTab} data={data} setData={setData} />}
      {tab === 3 && <LiteraryWorkUpload tab={tab} setTab={setTab} data={data} setData={setData} />}
    </div>
  );
}

export default LiteraryForm;
