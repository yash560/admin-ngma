import React from "react";

const Vacancies = () => {
  const list = [1, 2, 3, 4];

  return (
    <div>
      <div class="flex-grow py-12 px-10">
        <div class="flex justify-between flex-col">
          <div>
            <h4 class="text-sm font-bold text-indigo-600">Hi Admin,</h4>
            <h1 class="text-4xl font-bold text-indigo-900 mt-">
              Add Vacancies
            </h1>
          </div>
          <div class=" w-full space-y-8 p-10 z-10">
            <div class="grid gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:space-y-2 mb-3">
                      <label class="text-xs font-semibold text-gray-600 py-2">
                        <abbr class="hidden" title="required">
                          *
                        </abbr>
                      </label>
                    </div>
                    <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                      <div class="mb-3 space-y-2 w-full text-xs">
                        <label class="font-semibold text-gray-600 py-2">
                          Delhi <abbr title="required">*</abbr>
                        </label>
                        <div class="flex items-center py-6">
                          <div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                            <img
                              class="w-12 h-12 mr-4 object-cover"
                              src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                              alt="Avatar Upload"
                            />
                          </div>
                          <label class="cursor-pointer ">
                            <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                              Browse
                            </span>
                            <input type="file" class="hidden" />
                          </label>
                        </div>
                        <p class="text-red text-xs hidden">
                          Please fill out this field.
                        </p>
                      </div>
                      <div class="mb-3 space-y-2 w-full text-xs">
                        <label class="font-semibold text-gray-600 py-2">
                          Mumbai<abbr title="required">*</abbr>
                        </label>
                        <div class="flex items-center py-6">
                          <div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                            <img
                              class="w-12 h-12 mr-4 object-cover"
                              src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                              alt="Avatar Upload"
                            />
                          </div>
                          <label class="cursor-pointer ">
                            <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                              Browse
                            </span>
                            <input type="file" class="hidden" />
                          </label>
                        </div>
                        <p class="text-red text-xs hidden">
                          Please fill out this field.
                        </p>
                      </div>
                    </div>
                    <div class="mb-3 space-y-2 w-full text-xs">
                      <label class="font-semibold text-gray-600 py-2">
                        Bangalore <abbr title="required">*</abbr>
                      </label>
                      <div class="flex items-center py-6">
                        <div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                          <img
                            class="w-12 h-12 mr-4 object-cover"
                            src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                            alt="Avatar Upload"
                          />
                        </div>
                        <label class="cursor-pointer ">
                          <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                            Browse
                          </span>
                          <input type="file" class="hidden" />
                        </label>
                      </div>
                      <p class="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>

                    <p class="text-xs text-red-500 text-right my-3">
                      Required fields are marked with an asterisk
                      <abbr title="Required field">*</abbr>
                    </p>
                    <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                        Cancel
                      </button>
                      <button class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-6">
              <div>
                <h2 class="text-gray-600 font-semibold">NGMA Oder</h2>
                <span class="text-xs">All NGMA news</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex bg-gray-50 items-center p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    class="bg-gray-50 outline-none ml-1 block "
                    type="text"
                    name=""
                    id=""
                    placeholder="search..."
                  />
                </div>
                <div class="lg:ml-40 ml-10 space-x-8">
                  <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                    New Report
                  </button>
                  <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                    Create
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Name
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Description
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          S No.
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((item) => (
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 w-10 h-10">
                                <img
                                  class="w-full h-full rounded-full"
                                  src="https://ik.imagekit.io/Yash/avatar-boy-thewebvale_ZY-29Tfq8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1631266839950"
                                  alt=""
                                />
                              </div>
                              <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  Yash Jain
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Description
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Jan 01, 2020
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">77</p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span class="relative cursor-pointer hover:text-red-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span class="text-xs xs:text-sm text-gray-900">
                      Showing 1 to 4 of 50 Entries
                    </span>
                    <div class="inline-flex mt-2 xs:mt-0">
                      <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      &nbsp; &nbsp;
                      <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
