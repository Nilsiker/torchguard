const Contacts = ({ contacts }) => {


    return (<>
        <h2>Contacts</h2>
        <h3>Father: {contacts.father}</h3>
        <h3>Mother: {contacts.mother}</h3>
        <h3>Senior Artisan: {contacts.seniorArtisan}</h3>
        <h3>Mentor: {contacts.mentor}</h3>
        <h3>Friend: {contacts.friend}</h3>
        <h3>Enemy: {contacts.enemy}</h3>
        { contacts.others.length > 0 && <><h3>Others</h3>
            {
                contacts.others.map(contact => <p>{contact}</p>)
            }
        </>}
    </>)
}

export default Contacts