import React from "react";

const EditProfile = () => {
  return (
    <div className="max-w-4xl mx-auto my-20">
      <h1 className="font-bold text-2xl text-center md:text-left">PROFILE</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
            alt=""
            className="w-24 h-24 rounded-full object-cover  md:h-32 md:w-32 mb-4 "
          />
        </div>


        <div>
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Name:
              <span className="font-normal text-gray-700 dark:text-gray-300">Rupam Dey</span>
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditProfile;
