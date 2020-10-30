import React from 'react';
import './Notice.style.css';

const Notice = ({ lan }) => (
  <div>
    <hr style={{ background: '#343a40' }} />
    <div className='row text-center tex-lg-left'>
      <div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
        <div className='page-title '>
          <div className='title-center'>
            {lan === 'bn' ? (
              <h2>করোনাভাইরাস সম্পর্কে সচেতনতা (কোভিড -১৯)</h2>
            ) : (
              <h2>Awareness for Coronavirus (Covid -19)</h2>
            )}
          </div>
        </div>

        <div className='field field-type-text-textarea-with-summary field-body'>
          <div className='field-item text-left'>
            <p>
              {lan === 'bn' ? (
                <strong>করোনাভাইরাস (সারস-কোভি -২) এবং কোভিড -১৯ কী?</strong>
              ) : (
                <strong>What is Coronavirus (SARS-CoV-2) and Covid-19?</strong>
              )}
            </p>
            {lan === 'bn' ? (
              <p>
                করোনাভাইরাস (সিওভি) ভাইরাসগুলির বৃহত পরিবারে অন্তর্ভুক্ত যা
                হালকা জ্বর বা মারাত্মক রোগের কারণ হতে পারে, উদাহরণস্বরূপ:{' '}
                <strong>
                  মিডিল ইস্ট রেসপিরেটরি সিন্ড্রোম (মেরস-কোভি), গুরুতর তীব্র
                  শ্বাসতন্ত্র সিন্ড্রোম (এসএআরএস-কোভি), এবং কোভিড -১৯
                </strong>
              </p>
            ) : (
              <p>
                Coronavirus (CoV) belongs to a larger family of viruses which
                can lead to mild fever or even fatal diseases, for example:{' '}
                <strong>
                  Middle East Respiratory Syndrome (MERSE-CoV), Severe Acute
                  Respiratory Syndrome (SARS-CoV) and Covid-19.
                </strong>
              </p>
            )}

            {lan === 'bn' ? (
              <p>
                এসএআরএস-কোভ -২ করোনাভাইরাস সিওভিডি -১৯ রোগের জন্য দায়ী এবং এটি
                একটি নতুন প্রজাতি যা এর আগে মানবদেহে দেখা যায় নি। এটি একটি
                পরিবেষ্টিত, ইতিবাচক ধারণা, একক-স্ট্র্যান্ড আরএনএ ভাইরাস।
              </p>
            ) : (
              <p>
                SARS-Cov-2 Coronavirus is responsible for the COVID-19 disease,
                and it is a new species which has not been seen in the human
                body before. It is an enveloped, positive sense, single strand
                RNA virus.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className='collapseBtn container col-lg-10 col-md-10 col-sm-12 mb-4'>
        <div id='accordion'>
          <div className='card panel-box-body panel-box'>
            <div className='card-header text-left panel-head-title'>
              <a className='h6' data-toggle='collapse' href='#collapseOne'>
                {lan === 'bn' ? 'উপসর্গ' : 'Symptoms'}
              </a>
            </div>
            <div id='collapseOne' className='collapse' data-parent='#accordion'>
              <div className='card-body'>
                <p className='SymptomsPtag'>
                  <img
                    className='symptomImg'
                    alt='symptomImage'
                    src='https://user-images.githubusercontent.com/58518192/80411047-5b620a80-88ed-11ea-8f44-9d1385f1666a.png'
                  />
                </p>

                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'লক্ষণগুলি সাধারণত ২-১৪ দিনের মধ্যে দেখা দেয়'
                      : 'Symptoms generally appear within 2-14 days'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'বেশিরভাগ ক্ষেত্রে, প্রথম লক্ষণটি হল জ্বর (১00 ডিগ্রি ফারেনহাইট / ৩৮ ডিগ্রি সেলসিয়াসের বেশি)'
                      : 'In most cases, the first symptom is fever (more than 100 degrees Fahrenheit/38 degree Celsius)'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'শুকনো কাশি / গলা ব্যথাও হতে পারে'
                      : 'Dry cough/sore throat may also occur'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'শ্বাস প্রশ্বাসের সমস্যা বা নিউমোনিয়া হতে পারে'
                      : 'Respiratory issues or pneumonia may occur'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'অন্যান্য বিদ্যমান অসুস্থতা (ডায়াবেটিস / উচ্চ রক্তচাপ / শ্বাস প্রশ্বাস / হার্ট / কিডনিজনিত সমস্যা ইত্যাদি) অঙ্গে ব্যর্থতা বা বিভিন্ন শারীরিক ব্যাধি হতে পারে।'
                      : 'Other existing illnesses (diabetes/hypertension/respiratory/heart disease/kidney problems etc.) can lead to organ failure or various bodily disorders.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='card panel-box'>
            <div className='card-header text-left panel-head-title'>
              <a
                className='collapsed card-link h6'
                data-toggle='collapse'
                href='#collapseTwo'
              >
                {lan === 'bn' ? 'প্রতিরোধ' : 'Prevent'}
              </a>
            </div>
            <div id='collapseTwo' className='collapse' data-parent='#accordion'>
              <div className='card-body'>
                <p className='SymptomsPtag'>
                  <img
                    className='preventImg'
                    alt='preventImg'
                    src='https://user-images.githubusercontent.com/58518192/80411004-49806780-88ed-11ea-9b86-975f2db7b411.png'
                  />
                </p>

                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'কমপক্ষে ২0 সেকেন্ডের জন্য সাবান এবং জল দিয়ে আপনার হাত ঘন ঘন ধুয়ে নিন।'
                      : 'Wash your hands frequently with soap and water for at least 20 seconds.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'হাত না ধুয়ে আপনার চোখ, নাক এবং মুখ স্পর্শ করবেন না।'
                      : 'Do not touch your eyes, nose and mouth with unwashed hands.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'কাশি বা হাঁচি দেওয়ার সময় আপনার মুখটি ডাকতে বাহু / টিস্যু / কাপড় ব্যবহার করুন।'
                      : 'Use arm/tissue/cloth to cover your mouth while coughing or sneezing.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'জমায়েত করা এড়িয়ে চলুন।'
                      : 'Avoid gatherings.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'আপনার চারপাশের লোকজনের থেকে কমপক্ষে ৩ ফুট দূরত্ব রেখে সামাজিক দূরত্ব বজায় রাখুন।'
                      : 'Maintain social distancing by keeping at least a 3 ft distance from people around you.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'জরুরি প্রয়োজন না হলে বাড়িতেই থাকুন। নিরাপদে থাকুন এবং অন্যের সুরক্ষাও নিশ্চিত করুন।'
                      : 'Stay home, unless there is an urgent need. Stay safe, and ensure others’ safety too.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'সকল প্রকার ভ্রমণ এড়িয়ে চলুন এবং সাম্প্রতিক কোনও ভ্রমণ ইতিহাসের ক্ষেত্রে স্ব-চাপিয়ে দেওয়া হোম-কোয়ারান্টেইনে থাকুন।'
                      : 'Avoid all kinds of travel, and stay in self-imposed home-quarantine in case of any recent travel history.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'কোথাও থুথু ফেলবেন না। কোয়ারান্টিনে থাকা লোকদের সাথে যোগাযোগ এড়িয়ে চলুন।'
                      : 'Do not spit anywhere. Avoid contact with people who are in quarantine.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'ইতিমধ্যে সংক্রামিত ব্যক্তিদের সাথে যোগাযোগ এড়িয়ে চলুন।'
                      : 'Avoid contact with people who have already been infected.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='card panel-box'>
            <div className='card-header text-left panel-head-title'>
              <a
                className='collapsed card-link h6'
                data-toggle='collapse'
                href='#collapseThree'
              >
                {lan === 'bn' ? 'জরুরী পরিস্থিতিতে' : 'In An Emergency'}
              </a>
            </div>
            <div
              id='collapseThree'
              className='collapse'
              data-parent='#accordion'
            >
              <div className='card-body'>
                <p className='SymptomsPtag'>
                  <img
                    className='doctorImg'
                    alt='doctorImg'
                    src='https://user-images.githubusercontent.com/58518192/80411077-69b02680-88ed-11ea-98db-09bfbbce9220.png'
                  />
                </p>

                <ul className='list-group list-group-flush text-left'>
                  <li className='list-group-item'>
                    {lan === 'bn'
                      ? 'লক্ষণগুলি দেখা দিলে রোগীদের তাত্ক্ষণিকভাবে নিজেকে বিচ্ছিন্ন করা উচিত এবং বাড়ির কোয়ারান্টাইন থাকা উচিত।'
                      : 'Patients showing symptoms should isolate himself/herself immediately and stay in home quarantine.'}
                  </li>
                  <li className='list-group-item'>
                    {lan === 'bn' ? (
                      <p>
                        <strong> বাংলাদেশে : </strong> 'লক্ষণগুলি দেখানো রোগীদের
                        16263 বা 333 বা আইইডিসিআর হটলাইনের সাথে যোগাযোগ করতে হবে
                        (গ্রামীণফোন ব্যবহারকারীরা 16263 এবং 333 নম্বরে কল করতে
                        পারেন)।'
                      </p>
                    ) : (
                      <p>
                        <strong> In Bangladesh: </strong>'Patients showing
                        symptoms need to contact 16263 or 333 or IEDCR hotline
                        (Grameenphone users can call for free at 16263 and
                        333).'
                      </p>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <hr style={{ background: '#343a40' }} /> */}
  </div>
);

export default Notice;
