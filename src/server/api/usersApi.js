import axios from "axios"


export const postUserSkills = (data) => {
    return axios.post(
        "https://clubmate.iran.liara.run/api/user-skill/",
        JSON.stringify(data), { headers: {
            'Content-Type': 'application/json',
          }}
    )
    .then((res) => {
    

    })
    .catch((err) => {
        return err;
    })
}

export const postNewUser = (data, skills) => {
    return axios.post(
        "https://clubmate.iran.liara.run/api/user-info/",
        JSON.stringify(data), { headers: {
            'Content-Type': 'application/json',
          }}
    )
    .then((res) => {
        console.log("+++++++", res);
        if (res.data.id) {
            skills.map(async (skill) => {
                await postUserSkills({
                  "title": skill,
                  "user": res.data.id
              })
              })
        }
        
    })
    .catch((err) => {
        console.log(err)
    })
}


export const getUsers = () => {
    return axios.get(
        "https://clubmate.iran.liara.run/api/user-info/"
    )
    .then((res) => {
        console.log("+++++++", res);
        return res;
        
    })
    .catch((err) => {
        return err;
    })
}


export const getSkills = () => {
    return axios.get(
        "https://clubmate.iran.liara.run/api/user-skill/"
    )
    .then((res) => {
        console.log("+++++++", res);
        return res;
        
    })
    .catch((err) => {
        return err;
    })
}


