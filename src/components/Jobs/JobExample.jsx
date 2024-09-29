import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import JobCard from './JobCard';
import JobFilter from './JobFilter';



// Icons
const devIcon = `<svg data-name="filled outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340"><rect x="10" y="31.4" width="320" height="200.769" rx="14.494" style="fill:#8095aa"/><path style="fill:#edebf4" d="M34.993 50.76h270.015v149.143H34.993z"/><path style="fill:#fff" d="M47.331 62.266h245.338v126.131H47.331z"/><path style="fill:#4a617c" d="M149.682 232.17h40.636v60h-40.636zM232.94 308.6H107.06v-3.628a12.8 12.8 0 0 1 12.8-12.8h100.278a12.8 12.8 0 0 1 12.8 12.8z"/><path d="M210.4 114.163a40.4 40.4 0 0 1-21.715 35.83h-37.373c-36.9-19.4-23.637-75.914 18.689-76.233a40.4 40.4 0 0 1 40.399 40.403z" style="fill:#c7e2ff"/><path d="M183.289 129.084c-4.178-2.028-5.788-6.43-5.395-10.856 11.332-7.567 5.944-25.766-7.894-25.732-13.838-.034-19.226 18.167-7.894 25.732.822 13.059-10.355 8.494-10.79 19.59v12.166a40.6 40.6 0 0 0 37.366 0v-12.166a9.768 9.768 0 0 0-5.393-8.734z" style="fill:#fff"/><path d="M315.506 27.4H24.494A18.516 18.516 0 0 0 6 45.9v171.776a18.515 18.515 0 0 0 18.494 18.494h121.189v52h-25.822a16.821 16.821 0 0 0-16.8 16.8v3.63a4 4 0 0 0 4 4h125.878a4 4 0 0 0 4-4v-3.628a16.821 16.821 0 0 0-16.8-16.8h-25.822v-52h121.189A18.515 18.515 0 0 0 334 217.676V45.9a18.516 18.516 0 0 0-18.494-18.5zm-95.367 268.77a8.812 8.812 0 0 1 8.793 8.43H111.068a8.812 8.812 0 0 1 8.793-8.43h29.822c17.178.002 53.498-.001 70.456 0zM326 217.676a10.506 10.506 0 0 1-10.494 10.494H168.188a4 4 0 0 0 0 8h18.129v52h-32.634v-56a4 4 0 0 0-4-4H24.494A10.506 10.506 0 0 1 14 217.676V45.9a10.507 10.507 0 0 1 10.494-10.5h291.012A10.507 10.507 0 0 1 326 45.9z" style="fill:#2f313f"/><path d="M305.008 46.76H34.992a4 4 0 0 0-4 4V199.9a4 4 0 0 0 4 4h270.016a4 4 0 0 0 4-4V50.76a4 4 0 0 0-4-4zm-4 149.143H38.992V54.76h262.016z" style="fill:#2f313f"/><path d="M149.574 153.569a44.125 44.125 0 0 0 20.426 5 4 4 0 0 0 0-8 36.182 36.182 0 0 1-14.684-3.1v-9.644a5.737 5.737 0 0 1 3.186-5.157c5.485-2.645 8.112-8.522 7.6-14.433a4 4 0 0 0-1.753-3.31A10.076 10.076 0 0 1 170 96.5c9.856 0 13.807 12.918 5.647 18.422a4 4 0 0 0-1.753 3.31c-.508 5.914 2.121 11.785 7.6 14.433a5.737 5.737 0 0 1 3.186 5.157v12.166a4.054 4.054 0 0 0 5.857 3.554C231.354 131.951 216.189 70.081 170 69.76c-46.552.412-61.1 62.531-20.426 83.809zM170 77.76c34.182-.137 49.416 43.865 22.684 64.869v-4.811a13.692 13.692 0 0 0-7.6-12.31 5.748 5.748 0 0 1-3.186-5.323c12.5-10.777 4.658-31.77-11.894-31.689-16.552-.081-24.389 20.915-11.894 31.689a5.75 5.75 0 0 1-3.186 5.323 13.692 13.692 0 0 0-7.6 12.31v4.782C120.676 121.521 135.609 77.8 170 77.76zM170 171.089c-5.25.1-5.255 7.911 0 8 5.257-.089 5.249-7.897 0-8zM189.22 171.169c-4.672.958-3.989 7.907.78 7.92 5.785-.229 4.945-8.806-.78-7.92zM297.7 214.729c-1.579-3.992-7.76-2.757-7.69 1.53.357 6.341 9.79 4.457 7.69-1.53zM152.22 171.77c-3.983-2.634-8.4 2.757-5.05 6.15 4.254 3.936 9.74-2.758 5.05-6.15z" style="fill:#2f313f"/></svg>`;

const communicationIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-1{fill:#272835}</style></defs><g id="_17-Communication" data-name="17-Communication"><path class="cls-1" d="M17.19 46.6a1 1 0 0 0 .8.4 1 1 0 0 0 .8-.4L21.5 43H32a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v35a4 4 0 0 0 4 4h10.5zM6.1 27.6l-1 2a1 1 0 0 0-.1.4v11H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v35a2 2 0 0 1-2 2h-1V30a1 1 0 0 0-.11-.45l-1-2a1 1 0 0 0-.5-.47l-6.63-2.87-.54-1.67A8.2 8.2 0 0 0 25 16V8a1 1 0 0 0-.29-.71A9.73 9.73 0 0 0 18 5a9.73 9.73 0 0 0-6.71 2.29A1 1 0 0 0 11 8v8a8.2 8.2 0 0 0 2.77 6.54l-.54 1.67-6.63 2.87a1 1 0 0 0-.49.47zM18 22c-3.69 0-5-3.23-5-6v-1.09A3.55 3.55 0 0 0 15.82 13h4.36A3.55 3.55 0 0 0 23 14.91V16c0 2.77-1.31 6-5 6zm2.84 2.75L18 27.59l-2.84-2.84.38-1.19a7 7 0 0 0 4.9 0zM13 12.86V8.47A8.3 8.3 0 0 1 18 7a8.3 8.3 0 0 1 5 1.47v4.39c-.5-.13-1-.38-1-.86a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1c0 .47-.5.72-1 .86zM10 37v4H7V30.24l.73-1.46 6-2.61L17 29.41V33h2v-3.59l3.25-3.25 6 2.61.75 1.47V41h-3v-4h-2v4h-3a1 1 0 0 0-.8.4L18 44.34l-2.2-2.94a1 1 0 0 0-.8-.4h-3v-4z"/><path class="cls-1" d="M60 21h-7.5l-2.71-3.61A1 1 0 0 0 49 17a1 1 0 0 0-.8.4L45.5 21H38v2h8a1 1 0 0 0 .8-.4l2.2-2.94 2.2 2.94a1 1 0 0 0 .8.4h8a2 2 0 0 1 2 2v35a2 2 0 0 1-2 2h-1V51a1 1 0 0 0-.11-.45l-1-2a1 1 0 0 0-.5-.47l-6.63-2.87-.54-1.67A8.2 8.2 0 0 0 53 37v-8a1 1 0 0 0-.29-.71A9.73 9.73 0 0 0 46 26a9.73 9.73 0 0 0-6.71 2.29A1 1 0 0 0 39 29v8a8.2 8.2 0 0 0 2.77 6.54l-.54 1.67-6.63 2.87a1 1 0 0 0-.5.47l-1 2a1 1 0 0 0-.1.45v11h-1a2 2 0 0 1-2-2V45h-2v15a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V25a4 4 0 0 0-4-4zm-19 8.47A8.3 8.3 0 0 1 46 28a8.3 8.3 0 0 1 5 1.47v4.39c-.5-.13-1-.38-1-.86a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1c0 .47-.5.72-1 .86zM41 37v-1.09A3.55 3.55 0 0 0 43.82 34h4.36A3.55 3.55 0 0 0 51 35.91V37c0 2.77-1.31 6-5 6s-5-3.23-5-6zm7.84 8.75L46 48.59l-2.84-2.84.38-1.19a7 7 0 0 0 4.9 0zM57 62h-3v-4h-2v4H40v-4h-2v4h-3V51.24l.73-1.46 6-2.61L45 50.41V54h2v-3.59l3.25-3.25 6 2.61.75 1.47zM4 4h2v2H4zM30 4h2v2h-2z"/><path class="cls-1" d="M58 25h2v2h-2zM49 15a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM18 49a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></svg>`;

const marketingIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="27-idea"><path d="M24 48a7 7 0 0 1-6.322-4.008A7.008 7.008 0 0 1 11 37v-.071a7.015 7.015 0 0 1-5.964-6.214 6.995 6.995 0 0 1 0-13.43A7.015 7.015 0 0 1 11 11.071V11a7.008 7.008 0 0 1 6.678-6.992A7 7 0 0 1 24 0a6.006 6.006 0 0 1 6 6h-2a4 4 0 0 0-4-4 5 5 0 0 0-4.714 3.349 1 1 0 0 1-1 .667l-.1-.007c-.06 0-.12-.009-.182-.009a5.006 5.006 0 0 0-5 5 4.923 4.923 0 0 0 .077.837 1 1 0 0 1-.232.825.949.949 0 0 1-.786.342h-.008A5.012 5.012 0 0 0 7 18a1.094 1.094 0 0 1-.831 1.075 4.994 4.994 0 0 0 0 9.85 1 1 0 0 1 .835 1v.1A5 5 0 0 0 12 35a1.093 1.093 0 0 1 .81.353 1.024 1.024 0 0 1 .267.81A4.923 4.923 0 0 0 13 37a5.006 5.006 0 0 0 5 5c.062 0 .122-.005.182-.009l.1-.007a1.011 1.011 0 0 1 1 .667A5 5 0 0 0 24 46a4 4 0 0 0 4-4 1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-9h2v9a3 3 0 0 1-3 3h-2.083A6.01 6.01 0 0 1 24 48z"/><path d="M12 25a7.008 7.008 0 0 1-7-7h2a5.006 5.006 0 0 0 5 5zM18 44a7.008 7.008 0 0 1-7-7h2a5 5 0 0 0 10 0h2a7.008 7.008 0 0 1-7 7zM25 11h-2a5 5 0 0 0-10 0h-2a7 7 0 0 1 14 0zM18 35h2v2h-2z"/><path d="M16 37h2v2h-2zM13 16h2v2h-2zM11 18h2v2h-2zM47 32a1.031 1.031 0 0 1-.275-.038l-14-4A1 1 0 0 1 32 27v-8a1 1 0 0 1 .725-.962l14-4A1 1 0 0 1 48 15v16a1 1 0 0 1-1 1zm-13-5.754 12 3.428V16.326l-12 3.428z"/><path d="M33 28H23a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10v2h-9v6h9z"/><path d="M23 27h-1a4 4 0 0 1 0-8h1v2h-1a2 2 0 0 0 0 4h1zM42 16h2v14h-2zM38 23h2v6h-2zM27 34h-2a1 1 0 0 1-1-1v-6h2v3a1 1 0 0 1 .293-.707l3-3 1.414 1.414L28 30.414V33a1 1 0 0 1-1 1zM43 1h2v6h-2z"/><path d="M41 3h6v2h-6zM35 7h2v6h-2z"/><path d="M33 9h6v2h-6z"/></g></svg>`;

const designIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="graphic design"><path d="M26 8h-3a1 1 0 0 0 0 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4z"/><path d="M14.8 20h2.4a2.84 2.84 0 0 0 2.8-2.87V8.21a3 3 0 0 0-.57-1.76L17.5 3.77a1.92 1.92 0 0 0-3 0l-1.93 2.68A3 3 0 0 0 12 8.21v8.92A2.84 2.84 0 0 0 14.8 20zM14 8.21a1 1 0 0 1 .19-.59L16 5.11l1.81 2.51a1 1 0 0 1 .19.59v8.92a.84.84 0 0 1-.8.87h-2.4a.84.84 0 0 1-.8-.87zM15 23a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/></g></svg>`;

const commercialIcon = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="65.359" height="65.359" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 6.827 6.827"><defs><style>.fil0{fill:none}.fil5{fill:#757575}.fil7{fill:#ababab}.fil4{fill:#f6f6f6}</style></defs><g id="Layer_x0020_1"><g id="_273035328"><path id="_273035352" class="fil0" d="M0 0h6.827v6.827H0z"/><path id="_273035472" class="fil0" d="M.853.853h5.12v5.12H.853z"/></g><g id="_347928024"><path id="_273035064" style="fill:#e6e6e7" d="M4.377 1.904h1.568v4.069H4.307V1.904z"/><path id="_273035688" style="fill:#dadada" d="M.951 1.904h1.568v4.069H.88V1.904z"/><path id="_273034968" style="fill:#c7c7c7;fill-rule:nonzero" d="M2.595.853h1.713V5.973H2.519V.853z"/><path id="_273034368" class="fil4" d="M1.335 2.173v.467h-.227v-.467z"/><path id="_273034632" class="fil5" d="M1.335 2.615v.025h-.227v-.025z"/><path id="_273034464" class="fil4" d="M1.814 2.173v.467h-.227v-.467z"/><path id="_273050448" class="fil5" d="M1.814 2.615v.025h-.227v-.025z"/><path id="_273049896" class="fil4" d="M2.293 2.173v.467h-.228v-.467z"/><path id="_273049920" class="fil5" d="M2.293 2.615v.025h-.228v-.025z"/><path id="_273049776" class="fil4" d="M1.335 2.946v.467h-.227v-.467z"/><path id="_273050112" class="fil5" d="M1.335 3.388v.025h-.227v-.025z"/><path id="_273048912" class="fil4" d="M1.814 2.946v.467h-.227v-.467z"/><path id="_273048960" class="fil5" d="M1.814 3.388v.025h-.227v-.025z"/><path id="_273049320" class="fil4" d="M2.293 2.946v.467h-.228v-.467z"/><path id="_273049512" class="fil5" d="M2.293 3.388v.025h-.228v-.025z"/><path id="_273048792" class="fil4" d="M1.335 3.72v.466h-.227V3.72z"/><path id="_273048456" class="fil5" d="M1.335 4.161v.025h-.227v-.025z"/><path id="_273048672" class="fil4" d="M1.814 3.72v.466h-.227V3.72z"/><path id="_273047856" class="fil5" d="M1.814 4.161v.025h-.227v-.025z"/><path id="_273047832" class="fil4" d="M2.293 3.72v.466h-.228V3.72z"/><path id="_273048048" class="fil5" d="M2.293 4.161v.025h-.228v-.025z"/><path id="_273047424" class="fil4" d="M1.335 4.492v.468h-.227v-.468z"/><path id="_273047160" class="fil5" d="M1.335 4.934v.026h-.227v-.026z"/><path id="_273046992" class="fil4" d="M1.814 4.492v.468h-.227v-.468z"/><path id="_273047088" class="fil5" d="M1.814 4.934v.026h-.227v-.026z"/><path id="_273047328" class="fil4" d="M2.293 4.492v.468h-.228v-.468z"/><path id="_273045936" class="fil5" d="M2.293 4.934v.026h-.228v-.026z"/><path id="_273046368" class="fil4" d="M4.761 2.173v.467h-.227v-.467z"/><path id="_273046128" class="fil5" d="M4.761 2.615v.025h-.227v-.025z"/><path id="_273045456" class="fil4" d="M5.24 2.173v.467h-.227v-.467z"/><path id="_273045792" class="fil5" d="M5.24 2.615v.025h-.227v-.025z"/><path id="_273045096" class="fil4" d="M5.719 2.173v.467H5.49v-.467z"/><path id="_273045384" class="fil5" d="M5.719 2.615v.025H5.49v-.025z"/><g><path id="_273044760" class="fil4" d="M4.761 2.946v.467h-.227v-.467z"/><path id="_273045024" class="fil5" d="M4.761 3.388v.025h-.227v-.025z"/><path id="_273044976" class="fil4" d="M5.24 2.946v.467h-.227v-.467z"/><path id="_273044880" class="fil5" d="M5.24 3.388v.025h-.227v-.025z"/><g><path id="_273044136" class="fil4" d="M5.719 2.946v.467H5.49v-.467z"/><path id="_273044016" class="fil5" d="M5.719 3.388v.025H5.49v-.025z"/></g></g><g><path id="_273043512" class="fil4" d="M4.761 3.72v.466h-.227V3.72z"/><path id="_273043632" class="fil5" d="M4.761 4.161v.025h-.227v-.025z"/><path id="_273042912" class="fil4" d="M5.24 3.72v.466h-.227V3.72z"/><path id="_273042888" class="fil5" d="M5.24 4.161v.025h-.227v-.025z"/><g><path id="_273043128" class="fil4" d="M5.719 3.72v.466H5.49V3.72z"/><path id="_273043056" class="fil5" d="M5.719 4.161v.025H5.49v-.025z"/></g></g><g><path id="_273042720" class="fil4" d="M4.761 4.492v.468h-.227v-.468z"/><path id="_273042504" class="fil5" d="M4.761 4.934v.026h-.227v-.026z"/><path id="_273042240" class="fil4" d="M5.24 4.492v.468h-.227v-.468z"/><path id="_273041352" class="fil5" d="M5.24 4.934v.026h-.227v-.026z"/><g><path id="_273041712" class="fil4" d="M5.719 4.492v.468H5.49v-.468z"/><path id="_273041232" class="fil5" d="M5.719 4.934v.026H5.49v-.026z"/></g></g><path id="_273041784" style="fill:#bcbcbc" d="M1.452 5.201h.496v.772h-.496z"/><path id="_273041040" class="fil7" d="M3.04 1.384v.477h-.233v-.477z"/><path id="_273040680" class="fil5" d="M3.04 1.836v.025h-.233v-.025z"/><path id="_273040488" class="fil7" d="M3.53 1.384v.477h-.233v-.477z"/><path id="_273040848" class="fil5" d="M3.53 1.836v.025h-.233v-.025z"/><path id="_273040752" class="fil7" d="M4.02 1.384v.477h-.233v-.477z"/><path id="_275854008" class="fil5" d="M4.02 1.836v.025h-.233v-.025z"/><path id="_347931120" class="fil7" d="M3.04 2.224v.478h-.233v-.478z"/><path id="_347931480" class="fil5" d="M3.04 2.677v.025h-.233v-.025z"/><path id="_347931600" class="fil7" d="M3.53 2.224v.478h-.233v-.478z"/><path id="_347931312" class="fil5" d="M3.53 2.677v.025h-.233v-.025z"/><path id="_347930952" class="fil7" d="M4.02 2.224v.478h-.233v-.478z"/><path id="_347930400" class="fil5" d="M4.02 2.677v.025h-.233v-.025z"/><path id="_347930352" class="fil7" d="M3.04 3.065v.478h-.233v-.478z"/><path id="_347930928" class="fil5" d="M3.04 3.518v.025h-.233v-.025z"/><path id="_347930328" class="fil7" d="M3.53 3.065v.478h-.233v-.478z"/><path id="_347929776" class="fil5" d="M3.53 3.518v.025h-.233v-.025z"/><path id="_347929680" class="fil7" d="M4.02 3.065v.478h-.233v-.478z"/><path id="_347929944" class="fil5" d="M4.02 3.518v.025h-.233v-.025z"/><path id="_347930232" class="fil7" d="M3.04 3.906v.478h-.233v-.478z"/><path id="_347928720" class="fil5" d="M3.04 4.359v.025h-.233V4.36z"/><path id="_347929464" class="fil7" d="M3.53 3.906v.478h-.233v-.478z"/><path id="_347929200" class="fil5" d="M3.53 4.359v.025h-.233V4.36z"/><path id="_347929440" class="fil7" d="M4.02 3.906v.478h-.233v-.478z"/><path id="_347928816" class="fil5" d="M4.02 4.359v.025h-.233V4.36z"/><path id="_347928240" class="fil7" d="M3.077 4.926h.673v1.047h-.673z"/><path id="_347928528" style="fill:#d7d7d7" d="M4.878 5.201h.496v.772h-.496z"/></g></g></svg>`;

// Define icons for each department
const departmentIcons = {
  'Développement Web et Mobile': devIcon,
  'UI/UX Design et Graphisme': designIcon,
  'HR et Communication': communicationIcon,
  'Marketing et SEO': marketingIcon,
  'Commerciale': commercialIcon,
};

const JobExample = ({ searchTerm, setSearchTerm }) => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate for navigation
  const [filters, setFilters] = useState({
    jobType: {
      'Développement Web et Mobile': false,
      'UI/UX Design et Graphisme': false,
      'HR et Communication': false,
      'Marketing et SEO': false,
      'Commerciale': false,
    },
    timestamp: 'all',
    experience: 'all',
  });
  const [sortOrder, setSortOrder] = useState('most-recent');
  const [visibleJobs, setVisibleJobs] = useState(5);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5555/api/offre');
        const jobsWithIcons = response.data.map(job => ({
          ...job,
          icon: departmentIcons[job.departement] || 'defaultIcon',
          id: job._id,
          title: job.title
        }));
        setJobs(jobsWithIcons);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  if (jobs.length === 0) {
    return (
      <div className="text-center my-8">
        <p>Il n'y a pas de postes ouverts en ce moment.</p>
        <button
          className="mt-4 py-2 px-4 bg-[#442683] hover:bg-purple-950 text-white rounded-lg transition-colors duration-300"
          onClick={() => navigate('/')}
        >
          Retourner à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row">
        <JobFilter filters={filters} setFilters={setFilters} handleSearch={setSearchTerm} />
        <div className="flex-grow md:ml-8">
          <div className="flex flex-col md:flex-row items-center mb-4 justify-between">
            <p className="mb-2 md:mb-0">
              {jobs.length} Offres d'emploi valables
            </p>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="p-2 border border-gray-300 rounded">
              <option value="most-recent">Plus Récent</option>
              <option value="least-recent">Plus Ancient</option>
            </select>
          </div>
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              id={job.id}
              icon={job.icon}
              title={job.title}
              description={job.description}
              location={job.location}
              department={job.departement}
            />
          ))}
          <div className="text-center mt-4">
            <button onClick={() => setVisibleJobs(prev => (prev + 5 <= jobs.length ? prev + 5 : 5))} className="py-2 px-4 bg-[#662483] text-white rounded-lg transition-colors duration-300">
              {visibleJobs >= jobs.length ? 'Voir Moins' : 'Voir Plus'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExample;