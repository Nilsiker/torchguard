
import Contacts from './Contacts';
import './GuardMouse'
import GuardMouse from "./GuardMouse"

const Sheet = () => {
    const mouse = GuardMouse;
    return (<div className="sheet">
        <h1>{mouse.name}</h1>
        <h2>Birth Year</h2>
        <h3>{mouse.birthYear} ({1152 - mouse.birthYear})</h3>
        <h2>Home</h2>
        <h3> {mouse.home}</h3>
        <h2>Fur color</h2>
        <h3> {mouse.furColor}</h3>
        <h2>Guard rank</h2>
        <h3> {mouse.guardRank}</h3>
        <h2>Cloak color</h2>
        <h3> {mouse.cloakColor}</h3>

        <h2 className="mt-5">Belief</h2>
        <h3>{mouse.belief}</h3>
        <h2>Goal</h2>
        <h3> {mouse.goal}</h3>
        <h2>Instinct</h2>
        <h3> {mouse.instinct}</h3>
        <Contacts contacts={mouse.contacts} />
    </div>)
}

export default Sheet
