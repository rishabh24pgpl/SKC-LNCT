'use client'
import React from 'react'
import { useState } from 'react';

export default function Navbar() {

    const [openSubMenuId, setOpenSubMenuId] = useState(null);


    const toggleSubMenu = (submenuId) => {
        setOpenSubMenuId(openSubMenuId === submenuId ? null : submenuId);
      };
  return (
    <div className="flex justify-around bg-orange-400 p-4">
    <li id="tmenu-institute" class="relative">
    <a href="#" className="text-white" onClick={() => toggleSubMenu('institute')}>
        Institute
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron border-white"></span>
        </span>
      </a>
      <div className={`megamenu-panel nav-submenu right-0 ${openSubMenuId === 'institute' ? '' : 'hidden'}`}>
        <ul class="menu-row divide-y divide-gray-200 flex justify-around">
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">About NITR</a></h5>
                <ul>
                    <li><a id="submenu-welcome" href="/Institute/Welcome" class="text-gray-700 text-sm">Welcome to NITR</a></li>
                    <li><a id="submenu-vision" href="/Institute/Welcome" class="text-gray-700 text-sm">Vision and Mission</a></li>
                    <li><a id="submenu-exdirectors" href="/Institute/FormerDirectors" class="text-gray-700 text-sm">Former Directors</a></li>
                    <li><a id="submenu-rankings" href="/Institute/RankingRecognition" class="text-gray-700 text-sm">Ranking and Recognition</a></li>
                    <li><a id="submenu-campusfacility" href="/Institute/CampusFacility" class="text-gray-700 text-sm">Campus and Facilities</a></li>
                    <li><a id="submenu-campusmap" href="/Institute/CampusMap" class="text-gray-700 text-sm">Campus Map</a></li>
                    <li><a id="submenu-gallery" href="/Institute/Gallery" class="text-gray-700 text-sm">Gallery</a></li>
                    <li><a id="submenu-contactus" href="/Institute/ContactUs" class="text-gray-700 text-sm">Contact Us</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Administration</a></h5>
                <ul>
                    <li><a id="submenu-council" href="/Institute/NITsCouncil" class="text-gray-700 text-sm">Council for NITs</a></li>
                    <li><a id="submenu-bog" href="/Institute/BOG" class="text-gray-700 text-sm">Board of Governors</a></li>
                    <li><a id="submenu-senate" href="/Institute/Senate" class="text-gray-700 text-sm">The Senate</a></li>
                    <li><a id="submenu-chairperson" href="/Institute/Chairperson" class="text-gray-700 text-sm">Chairperson</a></li>
                    <li><a id="submenu-director" href="/Institute/Director" class="text-gray-700 text-sm">Director</a></li>
                    <li><a id="submenu-nitradmin" href="/Institute/NITRDirector" class="text-gray-700 text-sm">NITR Administration</a></li>
                    <li><a id="submenu-fc" href="/Institute/FC" class="text-gray-700 text-sm">Finance Committee</a></li>
                    <li><a id="submenu-bwc" href="/Institute/BWC" class="text-gray-700 text-sm">Buildings and Works Committee</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Key Documents</a></h5>
                <ul>
                    <li><a id="submenu-actstatues" href="/Institute/Act_Statutes" class="text-gray-700 text-sm">Act and Statutes</a></li>
                    <li><a id="submenu-mcouncil" href="/Institute/Minutes_NITCouncil" class="text-gray-700 text-sm">Minutes of NIT Council</a></li>
                    <li><a id="submenu-mbog" href="/Institute/Minutes_BOG" class="text-gray-700 text-sm">Minutes of BOG</a></li>
                    <li><a id="submenu-mfc" href="/Institute/Minutes_FC" class="text-gray-700 text-sm">Minutes of FC</a></li>
                    <li><a id="submenu-mbwc" href="/Institute/Minutes_BWC" class="text-gray-700 text-sm">Minutes of BWC</a></li>
                    <li><a id="submenu-msenate" href="/Institute/Minutes_Senate" class="text-gray-700 text-sm">Minutes of Senate</a></li>
                    <li><a id="submenu-ruleregulation" href="/Institute/Rules_Regulations" class="text-gray-700 text-sm">Rules and Regulations</a></li>
                    <li><a id="submenu-annualreport" href="/Institute/Annual_Reports" class="text-gray-700 text-sm">Annual Reports</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Accreditation</a></h5>
                <ul>
                    <li><a id="submenu-nirf" href="/Institute/NIRF" class="text-gray-700 text-sm">Data for NIRF</a></li>
                    <li><a id="submenu-nba" href="/Institute/NBA" class="text-gray-700 text-sm">Data for NBA</a></li>
                    <li><a id="submenu-ariia" href="/Institute/ARIIA" class="text-gray-700 text-sm">Data for ARIIA</a></li>
                    <li><a id="submenu-qs" href="/Institute/QS" class="text-gray-700 text-sm">Data for QS</a></li>
                </ul>
            </li>

            
        </ul>
    </div>
</li>

<li id="tmenu-institute" class="relative">
    <a href="#" className="text-white" onClick={() => toggleSubMenu('academics')}>
       Academics
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron border-white"></span>
        </span>
      </a>
      <div className={`megamenu-panel nav-submenu right-0 ${openSubMenuId === 'academics' ? '' : 'hidden'}`}>
        <ul class="menu-row divide-y divide-gray-200 flex justify-around">
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">About NITR</a></h5>
                <ul>
                    <li><a id="submenu-welcome" href="/Institute/Welcome" class="text-gray-700 text-sm">Welcome to NITR</a></li>
                    <li><a id="submenu-vision" href="/Institute/Welcome" class="text-gray-700 text-sm">Vision and Mission</a></li>
                    <li><a id="submenu-exdirectors" href="/Institute/FormerDirectors" class="text-gray-700 text-sm">Former Directors</a></li>
                    <li><a id="submenu-rankings" href="/Institute/RankingRecognition" class="text-gray-700 text-sm">Ranking and Recognition</a></li>
                    <li><a id="submenu-campusfacility" href="/Institute/CampusFacility" class="text-gray-700 text-sm">Campus and Facilities</a></li>
                    <li><a id="submenu-campusmap" href="/Institute/CampusMap" class="text-gray-700 text-sm">Campus Map</a></li>
                    <li><a id="submenu-gallery" href="/Institute/Gallery" class="text-gray-700 text-sm">Gallery</a></li>
                    <li><a id="submenu-contactus" href="/Institute/ContactUs" class="text-gray-700 text-sm">Contact Us</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Administration</a></h5>
                <ul>
                    <li><a id="submenu-council" href="/Institute/NITsCouncil" class="text-gray-700 text-sm">Council for NITs</a></li>
                    <li><a id="submenu-bog" href="/Institute/BOG" class="text-gray-700 text-sm">Board of Governors</a></li>
                    <li><a id="submenu-senate" href="/Institute/Senate" class="text-gray-700 text-sm">The Senate</a></li>
                    <li><a id="submenu-chairperson" href="/Institute/Chairperson" class="text-gray-700 text-sm">Chairperson</a></li>
                    <li><a id="submenu-director" href="/Institute/Director" class="text-gray-700 text-sm">Director</a></li>
                    <li><a id="submenu-nitradmin" href="/Institute/NITRDirector" class="text-gray-700 text-sm">NITR Administration</a></li>
                    <li><a id="submenu-fc" href="/Institute/FC" class="text-gray-700 text-sm">Finance Committee</a></li>
                    <li><a id="submenu-bwc" href="/Institute/BWC" class="text-gray-700 text-sm">Buildings and Works Committee</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Key Documents</a></h5>
                <ul>
                    <li><a id="submenu-actstatues" href="/Institute/Act_Statutes" class="text-gray-700 text-sm">Act and Statutes</a></li>
                    <li><a id="submenu-mcouncil" href="/Institute/Minutes_NITCouncil" class="text-gray-700 text-sm">Minutes of NIT Council</a></li>
                    <li><a id="submenu-mbog" href="/Institute/Minutes_BOG" class="text-gray-700 text-sm">Minutes of BOG</a></li>
                    <li><a id="submenu-mfc" href="/Institute/Minutes_FC" class="text-gray-700 text-sm">Minutes of FC</a></li>
                    <li><a id="submenu-mbwc" href="/Institute/Minutes_BWC" class="text-gray-700 text-sm">Minutes of BWC</a></li>
                    <li><a id="submenu-msenate" href="/Institute/Minutes_Senate" class="text-gray-700 text-sm">Minutes of Senate</a></li>
                    <li><a id="submenu-ruleregulation" href="/Institute/Rules_Regulations" class="text-gray-700 text-sm">Rules and Regulations</a></li>
                    <li><a id="submenu-annualreport" href="/Institute/Annual_Reports" class="text-gray-700 text-sm">Annual Reports</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Accreditation</a></h5>
                <ul>
                    <li><a id="submenu-nirf" href="/Institute/NIRF" class="text-gray-700 text-sm">Data for NIRF</a></li>
                    <li><a id="submenu-nba" href="/Institute/NBA" class="text-gray-700 text-sm">Data for NBA</a></li>
                    <li><a id="submenu-ariia" href="/Institute/ARIIA" class="text-gray-700 text-sm">Data for ARIIA</a></li>
                    <li><a id="submenu-qs" href="/Institute/QS" class="text-gray-700 text-sm">Data for QS</a></li>
                </ul>
            </li>

            
        </ul>
    </div>
</li>

<li id="tmenu-institute" class="relative">
    <a href="#" className="text-white" onClick={() => toggleSubMenu('students')}>
      Students
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron border-white"></span>
        </span>
      </a>
      <div className={`megamenu-panel nav-submenu right-0 ${openSubMenuId === 'students' ? '' : 'hidden'}`}>
        <ul class="menu-row divide-y divide-gray-200 flex justify-around">
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">About NITR</a></h5>
                <ul>
                    <li><a id="submenu-welcome" href="/Institute/Welcome" class="text-gray-700 text-sm">Welcome to NITR</a></li>
                    <li><a id="submenu-vision" href="/Institute/Welcome" class="text-gray-700 text-sm">Vision and Mission</a></li>
                    <li><a id="submenu-exdirectors" href="/Institute/FormerDirectors" class="text-gray-700 text-sm">Former Directors</a></li>
                    <li><a id="submenu-rankings" href="/Institute/RankingRecognition" class="text-gray-700 text-sm">Ranking and Recognition</a></li>
                    <li><a id="submenu-campusfacility" href="/Institute/CampusFacility" class="text-gray-700 text-sm">Campus and Facilities</a></li>
                    <li><a id="submenu-campusmap" href="/Institute/CampusMap" class="text-gray-700 text-sm">Campus Map</a></li>
                    <li><a id="submenu-gallery" href="/Institute/Gallery" class="text-gray-700 text-sm">Gallery</a></li>
                    <li><a id="submenu-contactus" href="/Institute/ContactUs" class="text-gray-700 text-sm">Contact Us</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Administration</a></h5>
                <ul>
                    <li><a id="submenu-council" href="/Institute/NITsCouncil" class="text-gray-700 text-sm">Council for NITs</a></li>
                    <li><a id="submenu-bog" href="/Institute/BOG" class="text-gray-700 text-sm">Board of Governors</a></li>
                    <li><a id="submenu-senate" href="/Institute/Senate" class="text-gray-700 text-sm">The Senate</a></li>
                    <li><a id="submenu-chairperson" href="/Institute/Chairperson" class="text-gray-700 text-sm">Chairperson</a></li>
                    <li><a id="submenu-director" href="/Institute/Director" class="text-gray-700 text-sm">Director</a></li>
                    <li><a id="submenu-nitradmin" href="/Institute/NITRDirector" class="text-gray-700 text-sm">NITR Administration</a></li>
                    <li><a id="submenu-fc" href="/Institute/FC" class="text-gray-700 text-sm">Finance Committee</a></li>
                    <li><a id="submenu-bwc" href="/Institute/BWC" class="text-gray-700 text-sm">Buildings and Works Committee</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Key Documents</a></h5>
                <ul>
                    <li><a id="submenu-actstatues" href="/Institute/Act_Statutes" class="text-gray-700 text-sm">Act and Statutes</a></li>
                    <li><a id="submenu-mcouncil" href="/Institute/Minutes_NITCouncil" class="text-gray-700 text-sm">Minutes of NIT Council</a></li>
                    <li><a id="submenu-mbog" href="/Institute/Minutes_BOG" class="text-gray-700 text-sm">Minutes of BOG</a></li>
                    <li><a id="submenu-mfc" href="/Institute/Minutes_FC" class="text-gray-700 text-sm">Minutes of FC</a></li>
                    <li><a id="submenu-mbwc" href="/Institute/Minutes_BWC" class="text-gray-700 text-sm">Minutes of BWC</a></li>
                    <li><a id="submenu-msenate" href="/Institute/Minutes_Senate" class="text-gray-700 text-sm">Minutes of Senate</a></li>
                    <li><a id="submenu-ruleregulation" href="/Institute/Rules_Regulations" class="text-gray-700 text-sm">Rules and Regulations</a></li>
                    <li><a id="submenu-annualreport" href="/Institute/Annual_Reports" class="text-gray-700 text-sm">Annual Reports</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Accreditation</a></h5>
                <ul>
                    <li><a id="submenu-nirf" href="/Institute/NIRF" class="text-gray-700 text-sm">Data for NIRF</a></li>
                    <li><a id="submenu-nba" href="/Institute/NBA" class="text-gray-700 text-sm">Data for NBA</a></li>
                    <li><a id="submenu-ariia" href="/Institute/ARIIA" class="text-gray-700 text-sm">Data for ARIIA</a></li>
                    <li><a id="submenu-qs" href="/Institute/QS" class="text-gray-700 text-sm">Data for QS</a></li>
                </ul>
            </li>

            
        </ul>
    </div>
</li>
<li id="tmenu-institute" class="relative">
    <a href="#" className="text-white" onClick={() => toggleSubMenu('faculty & staff')}>
        Faculty & Staff
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron border-white"></span>
        </span>
      </a>
      <div className={`megamenu-panel nav-submenu right-0 ${openSubMenuId === 'faculty & staff' ? '' : 'hidden'}`}>
        <ul class="menu-row divide-y divide-gray-200 flex justify-around">
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">About NITR</a></h5>
                <ul>
                    <li><a id="submenu-welcome" href="/Institute/Welcome" class="text-gray-700 text-sm">Welcome to NITR</a></li>
                    <li><a id="submenu-vision" href="/Institute/Welcome" class="text-gray-700 text-sm">Vision and Mission</a></li>
                    <li><a id="submenu-exdirectors" href="/Institute/FormerDirectors" class="text-gray-700 text-sm">Former Directors</a></li>
                    <li><a id="submenu-rankings" href="/Institute/RankingRecognition" class="text-gray-700 text-sm">Ranking and Recognition</a></li>
                    <li><a id="submenu-campusfacility" href="/Institute/CampusFacility" class="text-gray-700 text-sm">Campus and Facilities</a></li>
                    <li><a id="submenu-campusmap" href="/Institute/CampusMap" class="text-gray-700 text-sm">Campus Map</a></li>
                    <li><a id="submenu-gallery" href="/Institute/Gallery" class="text-gray-700 text-sm">Gallery</a></li>
                    <li><a id="submenu-contactus" href="/Institute/ContactUs" class="text-gray-700 text-sm">Contact Us</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Administration</a></h5>
                <ul>
                    <li><a id="submenu-council" href="/Institute/NITsCouncil" class="text-gray-700 text-sm">Council for NITs</a></li>
                    <li><a id="submenu-bog" href="/Institute/BOG" class="text-gray-700 text-sm">Board of Governors</a></li>
                    <li><a id="submenu-senate" href="/Institute/Senate" class="text-gray-700 text-sm">The Senate</a></li>
                    <li><a id="submenu-chairperson" href="/Institute/Chairperson" class="text-gray-700 text-sm">Chairperson</a></li>
                    <li><a id="submenu-director" href="/Institute/Director" class="text-gray-700 text-sm">Director</a></li>
                    <li><a id="submenu-nitradmin" href="/Institute/NITRDirector" class="text-gray-700 text-sm">NITR Administration</a></li>
                    <li><a id="submenu-fc" href="/Institute/FC" class="text-gray-700 text-sm">Finance Committee</a></li>
                    <li><a id="submenu-bwc" href="/Institute/BWC" class="text-gray-700 text-sm">Buildings and Works Committee</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Key Documents</a></h5>
                <ul>
                    <li><a id="submenu-actstatues" href="/Institute/Act_Statutes" class="text-gray-700 text-sm">Act and Statutes</a></li>
                    <li><a id="submenu-mcouncil" href="/Institute/Minutes_NITCouncil" class="text-gray-700 text-sm">Minutes of NIT Council</a></li>
                    <li><a id="submenu-mbog" href="/Institute/Minutes_BOG" class="text-gray-700 text-sm">Minutes of BOG</a></li>
                    <li><a id="submenu-mfc" href="/Institute/Minutes_FC" class="text-gray-700 text-sm">Minutes of FC</a></li>
                    <li><a id="submenu-mbwc" href="/Institute/Minutes_BWC" class="text-gray-700 text-sm">Minutes of BWC</a></li>
                    <li><a id="submenu-msenate" href="/Institute/Minutes_Senate" class="text-gray-700 text-sm">Minutes of Senate</a></li>
                    <li><a id="submenu-ruleregulation" href="/Institute/Rules_Regulations" class="text-gray-700 text-sm">Rules and Regulations</a></li>
                    <li><a id="submenu-annualreport" href="/Institute/Annual_Reports" class="text-gray-700 text-sm">Annual Reports</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Accreditation</a></h5>
                <ul>
                    <li><a id="submenu-nirf" href="/Institute/NIRF" class="text-gray-700 text-sm">Data for NIRF</a></li>
                    <li><a id="submenu-nba" href="/Institute/NBA" class="text-gray-700 text-sm">Data for NBA</a></li>
                    <li><a id="submenu-ariia" href="/Institute/ARIIA" class="text-gray-700 text-sm">Data for ARIIA</a></li>
                    <li><a id="submenu-qs" href="/Institute/QS" class="text-gray-700 text-sm">Data for QS</a></li>
                </ul>
            </li>

            
        </ul>
    </div>
</li>
<li id="tmenu-institute" class="relative">
    <a href="#" className="text-white" onClick={() => toggleSubMenu('research')}>
       Research
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron border-white"></span>
        </span>
      </a>
      <div className={`megamenu-panel nav-submenu right-0 ${openSubMenuId === 'research' ? '' : 'hidden'}`}>
        <ul class="menu-row divide-y divide-gray-200 flex justify-around">
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">About NITR</a></h5>
                <ul>
                    <li><a id="submenu-welcome" href="/Institute/Welcome" class="text-gray-700 text-sm">Welcome to NITR</a></li>
                    <li><a id="submenu-vision" href="/Institute/Welcome" class="text-gray-700 text-sm">Vision and Mission</a></li>
                    <li><a id="submenu-exdirectors" href="/Institute/FormerDirectors" class="text-gray-700 text-sm">Former Directors</a></li>
                    <li><a id="submenu-rankings" href="/Institute/RankingRecognition" class="text-gray-700 text-sm">Ranking and Recognition</a></li>
                    <li><a id="submenu-campusfacility" href="/Institute/CampusFacility" class="text-gray-700 text-sm">Campus and Facilities</a></li>
                    <li><a id="submenu-campusmap" href="/Institute/CampusMap" class="text-gray-700 text-sm">Campus Map</a></li>
                    <li><a id="submenu-gallery" href="/Institute/Gallery" class="text-gray-700 text-sm">Gallery</a></li>
                    <li><a id="submenu-contactus" href="/Institute/ContactUs" class="text-gray-700 text-sm">Contact Us</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Administration</a></h5>
                <ul>
                    <li><a id="submenu-council" href="/Institute/NITsCouncil" class="text-gray-700 text-sm">Council for NITs</a></li>
                    <li><a id="submenu-bog" href="/Institute/BOG" class="text-gray-700 text-sm">Board of Governors</a></li>
                    <li><a id="submenu-senate" href="/Institute/Senate" class="text-gray-700 text-sm">The Senate</a></li>
                    <li><a id="submenu-chairperson" href="/Institute/Chairperson" class="text-gray-700 text-sm">Chairperson</a></li>
                    <li><a id="submenu-director" href="/Institute/Director" class="text-gray-700 text-sm">Director</a></li>
                    <li><a id="submenu-nitradmin" href="/Institute/NITRDirector" class="text-gray-700 text-sm">NITR Administration</a></li>
                    <li><a id="submenu-fc" href="/Institute/FC" class="text-gray-700 text-sm">Finance Committee</a></li>
                    <li><a id="submenu-bwc" href="/Institute/BWC" class="text-gray-700 text-sm">Buildings and Works Committee</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Key Documents</a></h5>
                <ul>
                    <li><a id="submenu-actstatues" href="/Institute/Act_Statutes" class="text-gray-700 text-sm">Act and Statutes</a></li>
                    <li><a id="submenu-mcouncil" href="/Institute/Minutes_NITCouncil" class="text-gray-700 text-sm">Minutes of NIT Council</a></li>
                    <li><a id="submenu-mbog" href="/Institute/Minutes_BOG" class="text-gray-700 text-sm">Minutes of BOG</a></li>
                    <li><a id="submenu-mfc" href="/Institute/Minutes_FC" class="text-gray-700 text-sm">Minutes of FC</a></li>
                    <li><a id="submenu-mbwc" href="/Institute/Minutes_BWC" class="text-gray-700 text-sm">Minutes of BWC</a></li>
                    <li><a id="submenu-msenate" href="/Institute/Minutes_Senate" class="text-gray-700 text-sm">Minutes of Senate</a></li>
                    <li><a id="submenu-ruleregulation" href="/Institute/Rules_Regulations" class="text-gray-700 text-sm">Rules and Regulations</a></li>
                    <li><a id="submenu-annualreport" href="/Institute/Annual_Reports" class="text-gray-700 text-sm">Annual Reports</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Accreditation</a></h5>
                <ul>
                    <li><a id="submenu-nirf" href="/Institute/NIRF" class="text-gray-700 text-sm">Data for NIRF</a></li>
                    <li><a id="submenu-nba" href="/Institute/NBA" class="text-gray-700 text-sm">Data for NBA</a></li>
                    <li><a id="submenu-ariia" href="/Institute/ARIIA" class="text-gray-700 text-sm">Data for ARIIA</a></li>
                    <li><a id="submenu-qs" href="/Institute/QS" class="text-gray-700 text-sm">Data for QS</a></li>
                </ul>
            </li>

            
        </ul>
    </div>
</li>
<li id="tmenu-institute" class="relative">
    <a href="#" className="text-white" onClick={() => toggleSubMenu('alumni')}>
      Alumni
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron border-white"></span>
        </span>
      </a>
      <div className={`megamenu-panel nav-submenu right-0 ${openSubMenuId === 'alumni' ? '' : 'hidden'}`}>
        <ul class="menu-row divide-y divide-gray-200 flex justify-around">
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">About NITR</a></h5>
                <ul>
                    <li><a id="submenu-welcome" href="/Institute/Welcome" class="text-gray-700 text-sm">Welcome to NITR</a></li>
                    <li><a id="submenu-vision" href="/Institute/Welcome" class="text-gray-700 text-sm">Vision and Mission</a></li>
                    <li><a id="submenu-exdirectors" href="/Institute/FormerDirectors" class="text-gray-700 text-sm">Former Directors</a></li>
                    <li><a id="submenu-rankings" href="/Institute/RankingRecognition" class="text-gray-700 text-sm">Ranking and Recognition</a></li>
                    <li><a id="submenu-campusfacility" href="/Institute/CampusFacility" class="text-gray-700 text-sm">Campus and Facilities</a></li>
                    <li><a id="submenu-campusmap" href="/Institute/CampusMap" class="text-gray-700 text-sm">Campus Map</a></li>
                    <li><a id="submenu-gallery" href="/Institute/Gallery" class="text-gray-700 text-sm">Gallery</a></li>
                    <li><a id="submenu-contactus" href="/Institute/ContactUs" class="text-gray-700 text-sm">Contact Us</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Administration</a></h5>
                <ul>
                    <li><a id="submenu-council" href="/Institute/NITsCouncil" class="text-gray-700 text-sm">Council for NITs</a></li>
                    <li><a id="submenu-bog" href="/Institute/BOG" class="text-gray-700 text-sm">Board of Governors</a></li>
                    <li><a id="submenu-senate" href="/Institute/Senate" class="text-gray-700 text-sm">The Senate</a></li>
                    <li><a id="submenu-chairperson" href="/Institute/Chairperson" class="text-gray-700 text-sm">Chairperson</a></li>
                    <li><a id="submenu-director" href="/Institute/Director" class="text-gray-700 text-sm">Director</a></li>
                    <li><a id="submenu-nitradmin" href="/Institute/NITRDirector" class="text-gray-700 text-sm">NITR Administration</a></li>
                    <li><a id="submenu-fc" href="/Institute/FC" class="text-gray-700 text-sm">Finance Committee</a></li>
                    <li><a id="submenu-bwc" href="/Institute/BWC" class="text-gray-700 text-sm">Buildings and Works Committee</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Key Documents</a></h5>
                <ul>
                    <li><a id="submenu-actstatues" href="/Institute/Act_Statutes" class="text-gray-700 text-sm">Act and Statutes</a></li>
                    <li><a id="submenu-mcouncil" href="/Institute/Minutes_NITCouncil" class="text-gray-700 text-sm">Minutes of NIT Council</a></li>
                    <li><a id="submenu-mbog" href="/Institute/Minutes_BOG" class="text-gray-700 text-sm">Minutes of BOG</a></li>
                    <li><a id="submenu-mfc" href="/Institute/Minutes_FC" class="text-gray-700 text-sm">Minutes of FC</a></li>
                    <li><a id="submenu-mbwc" href="/Institute/Minutes_BWC" class="text-gray-700 text-sm">Minutes of BWC</a></li>
                    <li><a id="submenu-msenate" href="/Institute/Minutes_Senate" class="text-gray-700 text-sm">Minutes of Senate</a></li>
                    <li><a id="submenu-ruleregulation" href="/Institute/Rules_Regulations" class="text-gray-700 text-sm">Rules and Regulations</a></li>
                    <li><a id="submenu-annualreport" href="/Institute/Annual_Reports" class="text-gray-700 text-sm">Annual Reports</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Accreditation</a></h5>
                <ul>
                    <li><a id="submenu-nirf" href="/Institute/NIRF" class="text-gray-700 text-sm">Data for NIRF</a></li>
                    <li><a id="submenu-nba" href="/Institute/NBA" class="text-gray-700 text-sm">Data for NBA</a></li>
                    <li><a id="submenu-ariia" href="/Institute/ARIIA" class="text-gray-700 text-sm">Data for ARIIA</a></li>
                    <li><a id="submenu-qs" href="/Institute/QS" class="text-gray-700 text-sm">Data for QS</a></li>
                </ul>
            </li>

            
        </ul>
    </div>
</li>
<li id="tmenu-institute" class="relative">
    <a href="#" className="text-white" onClick={() => toggleSubMenu('resources')}>
        Resources
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron border-white"></span>
        </span>
      </a>
      <div className={`megamenu-panel nav-submenu right-0 ${openSubMenuId === 'resources' ? '' : 'hidden'}`}>
        <ul class="menu-row divide-y divide-gray-200 flex justify-around">
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">NITR</a></h5>
                <ul>
                    <li><a id="submenu-welcome" href="/Institute/Welcome" class="text-gray-700 text-sm">Welcome to NITR</a></li>
                    <li><a id="submenu-vision" href="/Institute/Welcome" class="text-gray-700 text-sm">Vision and Mission</a></li>
                    <li><a id="submenu-exdirectors" href="/Institute/FormerDirectors" class="text-gray-700 text-sm">Former Directors</a></li>
                    <li><a id="submenu-rankings" href="/Institute/RankingRecognition" class="text-gray-700 text-sm">Ranking and Recognition</a></li>
                    <li><a id="submenu-campusfacility" href="/Institute/CampusFacility" class="text-gray-700 text-sm">Campus and Facilities</a></li>
                    <li><a id="submenu-campusmap" href="/Institute/CampusMap" class="text-gray-700 text-sm">Campus Map</a></li>
                    <li><a id="submenu-gallery" href="/Institute/Gallery" class="text-gray-700 text-sm">Gallery</a></li>
                    <li><a id="submenu-contactus" href="/Institute/ContactUs" class="text-gray-700 text-sm">Contact Us</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Administration</a></h5>
                <ul>
                    <li><a id="submenu-council" href="/Institute/NITsCouncil" class="text-gray-700 text-sm">Council for NITs</a></li>
                    <li><a id="submenu-bog" href="/Institute/BOG" class="text-gray-700 text-sm">Board of Governors</a></li>
                    <li><a id="submenu-senate" href="/Institute/Senate" class="text-gray-700 text-sm">The Senate</a></li>
                    <li><a id="submenu-chairperson" href="/Institute/Chairperson" class="text-gray-700 text-sm">Chairperson</a></li>
                    <li><a id="submenu-director" href="/Institute/Director" class="text-gray-700 text-sm">Director</a></li>
                    <li><a id="submenu-nitradmin" href="/Institute/NITRDirector" class="text-gray-700 text-sm">NITR Administration</a></li>
                    <li><a id="submenu-fc" href="/Institute/FC" class="text-gray-700 text-sm">Finance Committee</a></li>
                    <li><a id="submenu-bwc" href="/Institute/BWC" class="text-gray-700 text-sm">Buildings and Works Committee</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Key Documents</a></h5>
                <ul>
                    <li><a id="submenu-actstatues" href="/Institute/Act_Statutes" class="text-gray-700 text-sm">Act and Statutes</a></li>
                    <li><a id="submenu-mcouncil" href="/Institute/Minutes_NITCouncil" class="text-gray-700 text-sm">Minutes of NIT Council</a></li>
                    <li><a id="submenu-mbog" href="/Institute/Minutes_BOG" class="text-gray-700 text-sm">Minutes of BOG</a></li>
                    <li><a id="submenu-mfc" href="/Institute/Minutes_FC" class="text-gray-700 text-sm">Minutes of FC</a></li>
                    <li><a id="submenu-mbwc" href="/Institute/Minutes_BWC" class="text-gray-700 text-sm">Minutes of BWC</a></li>
                    <li><a id="submenu-msenate" href="/Institute/Minutes_Senate" class="text-gray-700 text-sm">Minutes of Senate</a></li>
                    <li><a id="submenu-ruleregulation" href="/Institute/Rules_Regulations" class="text-gray-700 text-sm">Rules and Regulations</a></li>
                    <li><a id="submenu-annualreport" href="/Institute/Annual_Reports" class="text-gray-700 text-sm">Annual Reports</a></li>
                </ul>
            </li>
            <li class="py-4">
                <h5 class="text-lg font-semibold mb-2"><a href="#" class="text-blue-500">Accreditation</a></h5>
                <ul>
                    <li><a id="submenu-nirf" href="/Institute/NIRF" class="text-gray-700 text-sm">Data for NIRF</a></li>
                    <li><a id="submenu-nba" href="/Institute/NBA" class="text-gray-700 text-sm">Data for NBA</a></li>
                    <li><a id="submenu-ariia" href="/Institute/ARIIA" class="text-gray-700 text-sm">Data for ARIIA</a></li>
                    <li><a id="submenu-qs" href="/Institute/QS" class="text-gray-700 text-sm">Data for QS</a></li>
                </ul>
            </li>

            
        </ul>
    </div>
</li>
</div>

  )
}
