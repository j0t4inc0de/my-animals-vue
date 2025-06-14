<script setup>
// Importa la imagen usando la ruta relativa
import miLogoPerro from '../assets/logoPerro.png';
</script>
<!-- ESTRUCTURA -->
<template>
    <nav>
        <div class="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-sulu-200 border-t border-sulu-300 left-1/2">
            <div class="w-full">
                <div class="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 rounded-lg bg-sulu-300" role="group">
                    <button type="button" class="px-5 py-1.5 text-xs font-medium text-sulu-700 hover:bg-sulu-700 hover:text-sulu-200 rounded-lg">
                        Historia
                    </button>
                    <button type="button" class="px-5 py-1.5 text-xs font-medium text-sulu-700 hover:bg-sulu-700 hover:text-sulu-200 rounded-lg">
                        Galeria
                    </button>
                    <button type="button" class="px-5 py-1.5 text-xs font-medium text-sulu-700 hover:bg-sulu-700 hover:text-sulu-200 rounded-lg">
                        Sobre mi
                    </button>
                </div>
            </div>
            <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
                <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center p-4 group">
                    <svg class="w-5 h-5 mb-1 text-sulu-400 group-hover:text-sulu-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span class="sr-only">Home</span>
                </button>
                <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Home
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-bookmark" type="button" class="inline-flex flex-col items-center justify-center p-4 group">
                    <svg class="w-5 h-5 mb-1 text-sulu-400 group-hover:text-sulu-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                        <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
                    </svg>
                    <span class="sr-only">Bookmark</span>
                </button>
                <div id="tooltip-bookmark" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                    Bookmark
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-post" type="button" class="inline-flex flex-col items-center justify-center p-4 group">
                    <svg class="w-5 h-5 mb-1 text-sulu-400 group-hover:text-sulu-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span class="sr-only">New post</span>
                </button>
                <div id="tooltip-post" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                    New post
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-search" type="button" class="inline-flex flex-col items-center justify-center p-4 group">
                    <svg class="w-5 h-5 mb-1 text-sulu-400 group-hover:text-sulu-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
                <div id="tooltip-search" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                    Search
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center p-4 group">
                    <svg class="w-5 h-5 mb-1 text-sulu-400 group-hover:text-sulu-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                    </svg>
                    <span class="sr-only">Settings</span>
                </button>
                <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                    Settings
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
    </nav>
    <body class="bg-sulu-200">
        <section class="text-gray-600 bg-sulu-300">
            <div class="container mx-auto flex md:px-10 md:py-1 md:flex-row flex-col items-center">
                <div class="lg:flex-grow mt-5 md:mt-0 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1
                        class="text-2xl font-extrabold leading-9 mb-3 text-sulu-600 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                        Nuestras mascotas!
                    </h1>
                    <p class="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed text-sulu-600">
                        En esta página encontrarás cada mascota con la cual he tenido la fortuna de convivir.
                    </p>
                    <div class="flex justify-center">
                <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Boton de ejemplo
                </button>
                <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Boton de ejemplo
                </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                    <img 
                    :src="miLogoPerro" 
                    alt="Logo de mi perro" 
                    class="object-cover object-center rounded 
                            w-34 h-34     md:w-68 md:h-68    lg:w-74 lg:h-74"
                    >
                </div>
            </div>
        </section>
        <section>
            <div class="max-w-7xl mx-auto">
                <!-- Header Section -->
                <h1 class="text-2xl font-extrabold p-10 mb-3 text-sulu-600 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                    ¡Conócenos, que no mordemos!</h1>

                <!-- Cards Container -->
                <div class="flex flex-wrap justify-center gap-6 p-3">
                <!-- Card 1 -->
                <div class="bg-sulu-300 shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp" alt="Card Image 1" class="w-full h-48 object-cover">
                    <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800">Card Title 1</h2>
                    <p class="text-gray-600 mt-2">This is a sample description for card 1. Tailored for responsive designs using Tailwind CSS.</p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-sulu-300 shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp" alt="Card Image 2" class="w-full h-48 object-cover">
                    <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800">Card Title 2</h2>
                    <p class="text-gray-600 mt-2">This is a sample description for card 2. The card adjusts well across different screen sizes.</p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-sulu-300 shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp" alt="Card Image 3" class="w-full h-48 object-cover">
                    <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800">Card Title 3</h2>
                    <p class="text-gray-600 mt-2">This is a sample description for card 3. Styled using Tailwind CSS for an elegant look.</p>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="bg-sulu-300 shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Card Image 4" class="w-full h-48 object-cover">
                    <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800">Card Title 4</h2>
                    <p class="text-gray-600 mt-2">This is a sample description for card 4. Flexbox ensures the layout remains clean and organized.</p>
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="bg-sulu-300 shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp" alt="Card Image 5" class="w-full h-48 object-cover">
                    <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800">Card Title 5</h2>
                    <p class="text-gray-600 mt-2">This is a sample description for card 5. Mobile-first design approach for better responsiveness.</p>
                    </div>
                </div>

                <!-- Card 6 -->
                <div class="bg-sulu-300 shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk5.webp" alt="Card Image 6" class="w-full h-48 object-cover">
                    <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800">Card Title 6</h2>
                    <p class="text-gray-600 mt-2">This is a sample description for card 6. Built with hardcoded HTML and Tailwind CSS classes.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </body>
</template>

<!-- LOGICA DE VUE.JS -->
<script>

export default {
    name: 'MiHolaMundo',
    props: {
    }
}
</script>

<!-- ESTILOS -->
<style scoped>

</style>