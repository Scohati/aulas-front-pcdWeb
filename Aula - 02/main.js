/**
 * Base URL = https://swapi.dev/api/
 * URL slug = people/
 */
 
const handleSubmit = (event) => {
    event.preventDefault();

    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);

    const name = formData.get('name');
    const email = formData.get('email');

    console.log(name, email);
}

const slugs = ['people', 'planets', 'films']

const callGetPeople = () => {
    getPeople('planets')
    slugs.forEach(slug => {
        return getPeople(slug)
    })
}

const getPeople = async (slug) => {
    const resp = await fetch(`https://swapi.dev/api/${slug}/`);
    const respJson = await resp.json();
    console.log(respJson);
}
