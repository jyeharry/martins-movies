import React from 'react'
import {Outlet, useLoaderData} from 'react-router-dom'
import {NavBar} from '../components/NavBar'

export const Root = () => {
  return (
  <>
    <NavBar />
    <Outlet/>
  </>
) }
