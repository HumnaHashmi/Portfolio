import React from 'react'

function Testimonials() {
  return (
    <section class="bg-gray-100" id='testimonials'>
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color:'#BA203C' }}>
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-4xsm font-medium text-gray-900 dark:text-white">"I recently had the pleasure of working with Hunma, and I must say, their development skills are truly exceptional. From start to finish, they demonstrated a level of expertise and professionalism that far exceeded my expectations.

One of the standout qualities of Hunma is their technical prowess. They possess a deep understanding of various programming languages and frameworks, enabling them to tackle complex projects with ease. Their ability to analyze problems and devise innovative solutions is truly impressive. It's evident that they stay updated with the latest industry trends and best practices, as they consistently deliver high-quality, future-proof code.

Moreover, Hunma's attention to detail is unparalleled. They meticulously review every aspect of the project, ensuring that it not only meets the requirements but also exceeds them. Their dedication to producing clean, well-structured code is evident in the seamless functionality and performance of their applications. I have been consistently impressed by the bug-free nature of their deliverables."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full dark:bg-gray-600"  style={{backgroundColor:'#00A196'}}>
    <span class="font-medium text-white">GN</span>
</div>
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Gavin Nelson</div>
                  <div class="pl-3 text-med font-bold text-gray-500 dark:text-gray-400">Excel Industries</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
  )
}

export default Testimonials