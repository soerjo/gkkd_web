'use client'

import React from 'react'
import dynamic from 'next/dynamic';

import 'leaflet/dist/leaflet.css';
import { LatLngExpression, divIcon } from 'leaflet'

const iconMarker = divIcon({
    html: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4024 40.3084C29.8607 39.0992 42.75 32.1898 42.75 20.25C42.75 11.5515 35.6985 4.5 27 4.5C18.3015 4.5 11.25 11.5515 11.25 20.25C11.25 32.1898 24.1393 39.0992 26.5976 40.3084C26.8532 40.4341 27.1468 40.4341 27.4024 40.3084ZM27 27C30.7279 27 33.75 23.9779 33.75 20.25C33.75 16.5221 30.7279 13.5 27 13.5C23.2721 13.5 20.25 16.5221 20.25 20.25C20.25 23.9779 23.2721 27 27 27Z" fill="#F01411"/>
    <path d="M40.6399 37.125C42.0223 38.1511 42.75 39.3151 42.75 40.5C42.75 41.6849 42.0223 42.8489 40.6399 43.875C39.2576 44.9011 37.2693 45.7532 34.875 46.3457C32.4807 46.9381 29.7647 47.25 27 47.25C24.2353 47.25 21.5193 46.9381 19.125 46.3457C16.7307 45.7532 14.7425 44.9011 13.3601 43.875C11.9777 42.8489 11.25 41.6849 11.25 40.5C11.25 39.3151 11.9777 38.1511 13.3601 37.125" stroke="#F01411" stroke-width="2" stroke-linecap="round"/>
    </svg>
    `,
})
const position: LatLngExpression = [-6.2192230944546765, 106.75026130794649]

const MapContainer = dynamic(
    () => import("react-leaflet").then((module) => module.MapContainer),
    {
        ssr: false, // Disable server-side rendering for this component
    }
);
const TileLayer = dynamic(
    () => import("react-leaflet").then((module) => module.TileLayer),
    {
        ssr: false,
    }
);
const Marker = dynamic(
    () => import("react-leaflet").then((module) => module.Marker),
    {
        ssr: false,
    }
);
const Popup = dynamic(
    () => import("react-leaflet").then((module) => module.Popup),
    {
        ssr: false,
    }
);

const MapInformation = () => {

    return (
        <div>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={iconMarker}>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapInformation