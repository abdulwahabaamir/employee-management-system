import React from 'react'

const CreateTask = () => {
  return (
     <div className="flex items-center justify-center py-10">
        <form className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Create New Task
          </h2>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Task Title</label>
            <input
              type="text"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Description</label>
            <textarea
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Date</label>
            <input
              type="date"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Assign To</label>
            <input
              type="text"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Category</label>
            <input
              type="text"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 px-4 py-2 rounded text-white font-medium"
          >
            Create Task
          </button>
        </form>
      </div>
  )
}

export default CreateTask