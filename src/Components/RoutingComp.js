import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StylingComp from '../stylings/StylingComp'
import ConditionlRend from './ConditionlRend'
import ContactUs from './ContactUs'
import Counter from './Counter'
import FuncCounter from './Hooks/FuncCounter'
import UseEffectUserData from './Hooks/UseEffectUserData'
import LifeCycleComp from './LifeCycleComp'
import Pagination from './Pagination'
import UserlistandKeys from './UserlistandKeys'

function RoutingComp() {
  return (
    <div>
        <Routes>
            <Route path="/userlistandkeys" element={<UserlistandKeys />}  />
            <Route path="/stylecomp" element={<StylingComp />}  />
            <Route path="/condrend" element={<ConditionlRend />}  />
            <Route path="/contactUs" element={<ContactUs />}  />
            <Route path="/counter" element={<Counter />}  />
            <Route path="/lifecyclemethod" element={<LifeCycleComp />}  />
            <Route path="/pagination" element={<Pagination />}  />
            <Route path="/funccounter" element={<FuncCounter />}  />
            <Route path="/useEffecthook" element={<UseEffectUserData />}  />
        </Routes>
    </div>
  )
}

export default RoutingComp