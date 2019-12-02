/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import HomeComponent from "../components/HomePage/homeComponent";
import AlbumComponent from "../components/AlbumComponent/albumnComponent";

const homeContentRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeComponent/>
    },{
        path: '/albums',
        exact: true,
        main: () => <AlbumComponent/>
    },
];

export default homeContentRoutes;
