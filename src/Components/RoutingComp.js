import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StylingComp from '../stylings/StylingComp'
import ConditionlRend from './ConditionlRend'
import ContactUs from './ContactUs'
import UserlistandKeys from './UserlistandKeys'

function RoutingComp() {
  return (
    <div>
        <Routes>
            <Route path="/userlistandkeys" element={<UserlistandKeys />}  />
            <Route path="/stylecomp" element={<StylingComp />}  />
            <Route path="/condrend" element={<ConditionlRend />}  />
            <Route path="/contactUs" element={<ContactUs />}  />
        </Routes>
    </div>
  )
}

export default RoutingComp