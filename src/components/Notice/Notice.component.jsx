import React from 'react';

function Notice({ lan }) {
  let messag0, messag1, messag2;
  if (lan === 'bn') {
    messag0 = 'দ্রষ্টব্য : ';
    messag1 = 'জনগণের জন্য বিশ্ব স্বাস্থ্য সংস্থার ওয়েবসাইট থেকে নেওয়া';
    messag2 = 'নিজেকে এবং অন্যদের অসুস্থ হওয়ার হাত থেকে রক্ষা করুন';
  } else {
    messag0 = 'Note : ';
    messag1 = 'Taken from the World Health Organization website for the public';
    messag2 = 'Protect yourself and others from getting sick';
  }

  return (
    <div>
      <hr style={{ background: '#343a40' }} />

      <h2 className='text-warning mb-4'>
        <span className='text-info text-center'>{messag0}</span>
        {messag1}
      </h2>
      <div className='row text-center tex-lg-left'>
        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301837-34f67f00-87c8-11ea-8e8c-ad1645f188f8.jpg'
            alt='be-ready-social-3'
          />
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301835-332cbb80-87c8-11ea-9295-997613709ca5.jpg'
            alt='be-ready-social-2'
          />
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301830-3162f800-87c8-11ea-977e-505a9b6685c7.jpg'
            alt='be-ready-social-1'
          />
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301840-39229c80-87c8-11ea-9cd1-3b5b9c02a262.jpg'
            alt='be-smart-if-you-develop'
          />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301842-3d4eba00-87c8-11ea-81c5-6707e46397ff.jpg'
            alt='be-smart-inform'
          />
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301839-36c04280-87c8-11ea-8107-8025cbf8040b.jpg'
            alt='be-safe'
          />
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301823-2740f980-87c8-11ea-9e76-d335b83bbffc.jpg'
            alt='be-kind-to-address-stigma'
          />
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
          <img
            className='img-fluid img-thumbnail hvr-grow-shadow'
            src='https://user-images.githubusercontent.com/58518192/80301822-260fcc80-87c8-11ea-9b8b-d4dd3b34fbd3.jpg'
            alt='be-kind-to-address-fear'
          />
        </div>

        <hr style={{ background: '#343a40' }} />
        <h2 className='text-warning mb-4'>{messag2}</h2>

        <div className='row text-center text-lg-left'>
          <div className='col-lg-6 col-md-10 col-sm-10 mb-4'>
            <img
              src='https://user-images.githubusercontent.com/58518192/80301846-46d82200-87c8-11ea-88eb-51fc4035d6e3.jpg'
              alt='blue-2'
              className='img-fluid img-thumbnail hvr-grow-shadow'
            />
          </div>

          <div className='col-lg-6 col-md-10 col-sm-10 mb-4'>
            <img
              src='https://user-images.githubusercontent.com/58518192/80301853-4dff3000-87c8-11ea-9732-6fcf5d1e4b5d.jpg'
              alt='blue-3'
              className='img-fluid img-thumbnail hvr-grow-shadow'
            />
          </div>

          <div className='col-lg-6 col-md-10 col-sm-10 mb-4'>
            <img
              src='https://user-images.githubusercontent.com/58518192/80301855-4fc8f380-87c8-11ea-9eef-630e92348a80.jpg'
              alt='blue-4'
              className='img-fluid img-thumbnail hvr-grow-shadow'
            />
          </div>

          <div className='col-lg-6 col-md-10 col-sm-10 mb-4'>
            <img
              src='https://user-images.githubusercontent.com/58518192/80309739-a0f0db80-87f8-11ea-8f92-147667e9c81b.jpg'
              alt='stay_home'
              className='img-fluid img-thumbnail hvr-grow-shadow'
            />
          </div>
        </div>
      </div>

      <hr style={{ background: '#343a40' }} />

      <blockquote className='blockquote mt-5 mb-4 text-center'>
        <a
          className='link'
          href='https://www.who.int/'
          target='blank'
          rel='noreferrer'
        >
          {lan === 'bn'
            ? 'বিশ্ব স্বাস্থ্য সংস্থা'
            : 'World Health Organization'}
        </a>

        <footer className='blockquote-footer text-dark'>
          <b>
            {lan === 'bn'
              ? `যেসব ব্যক্তি COVID-19 ছড়িয়ে পড়ছে সেখানে সম্প্রতি বা গত ১৪ দিন পরিদর্শন করেছেন এমন ব্যক্তিদের সুরক্ষা ব্যবস্থা
              `
              : `Protection measures for persons who are in or have recently visited
              (past 14 days) areas where COVID-19 is spreading`}
          </b>
        </footer>

        <div>
          <p className='text-dark'>
            {lan === 'bn'
              ? `উপরে বর্ণিত গাইডেন্স অনুসরণ করুন।`
              : `Follow the guidance outlined above.`}
          </p>
          <p class='text-dark'>
            {lan === 'bn'
              ? `আপনি সুস্থ না হওয়া অবধি যদি আপনি অসুস্থ বোধ শুরু করেন, এমনকি মাথা ব্যথা এবং হালকা নাক দিয়ে নাকের মতো হালকা লক্ষণ রয়েছে। অন্যের সাথে যোগাযোগ এড়ানো এবং চিকিত্সা সুবিধাগুলি পরিদর্শন করা এই সুবিধাগুলি আরও কার্যকরভাবে পরিচালিত করতে এবং আপনাকে এবং অন্যদেরকে সম্ভাব্য COVID-19 এবং অন্যান্য ভাইরাস থেকে রক্ষা করতে সহায়তা করবে।`
              : `Stay at home if you begin to feel unwell, even with mild symptoms such as headache and a slight runny nose, until you recover. Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.
              `}
          </p>
          <p class='text-dark'>
            {lan === 'bn'
              ? `যদি আপনার জ্বর, কাশি এবং শ্বাসকষ্ট হয় তবে অবিলম্বে চিকিত্সার পরামর্শ নিন কারণ এটি শ্বাসকষ্টের সংক্রমণ বা অন্যান্য গুরুতর অবস্থার কারণে হতে পারে। আগে থেকেই কল করুন এবং আপনার সরবরাহকারীর সাথে সাম্প্রতিক যাতায়াত বা যাত্রীদের সাথে যোগাযোগের কথা বলুন। কেন? আগে থেকে কল করা আপনার স্বাস্থ্যসেবা সরবরাহকারীকে দ্রুত আপনাকে সঠিক স্বাস্থ্য সুবিধার দিকে পরিচালিত করার অনুমতি দেবে। এটি COVID-19 এবং অন্যান্য ভাইরাসগুলির সম্ভাব্য বিস্তার রোধ করতেও সহায়তা করবে।`
              : `If you develop fever, cough, and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers. Why? Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent the possible spread of COVID-19 and other viruses.`}
          </p>
        </div>
      </blockquote>
    </div>
  );
}

export default Notice;
