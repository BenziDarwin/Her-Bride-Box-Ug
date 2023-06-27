import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
    const navigate = useNavigate()
  return (
    <>
    <section class="bg-white dark:bg-gray-900 ">
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
            <p class="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">We can’t find that page</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist or has been moved.</p>

            <div class="flex items-center mt-6 gap-x-3">
                <button onClick={() => navigate("/")} class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    Take me home
                </button>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default NotFoundPage