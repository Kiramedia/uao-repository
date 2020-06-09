import axios from 'axios';

export const dataUser = {
    data: {
        Item: {
            User: "",
            name: "",
            email: "",
            profession: "",
            codeId: 0,
            cellphoneNumber: 0,
            linkLinkedIn: "",
            linkGithub: "",
            linkYoutube: "",
            urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Blank_flag.svg/1280px-Blank_flag.svg.png",
            Repositories: [
            ]
        }
    }
};

export function getDataUser(context) {
    axios.post("https://ri65k7xp7k.execute-api.sa-east-1.amazonaws.com/Dev1/repository/user", {
        params: {
            'user': localStorage.getItem("user")
        }
    }, {
        headers: {
            'x-api-key': "9wi5yne6fUaV9bCu0euoP86bMdGEyRAM14JlCsBM"
        }
    }).then(function (json) {
        context.setState({ data: json });
    }).catch((error) => {
        console.log(error);
    })
}

export function getData(context, search) {
    axios.post("https://ri65k7xp7k.execute-api.sa-east-1.amazonaws.com/Dev1/repository/repositories", {
        params: {
            'search': search
        }
    }, {
        headers: {
            'x-api-key': "9wi5yne6fUaV9bCu0euoP86bMdGEyRAM14JlCsBM"
        }
    }).then(function (json) {
        context.setState({ data: json });
    }).catch((error) => {
        console.log(error);
    })
}

export function getRepo(context, repositoryName, user) {
    axios.post("https://ri65k7xp7k.execute-api.sa-east-1.amazonaws.com/Dev1/repository/repo", {
        params: {
            'user': user,
            'repositoryName': repositoryName
        }
    }, {
        headers: {
            'x-api-key': "9wi5yne6fUaV9bCu0euoP86bMdGEyRAM14JlCsBM"
        }
    }).then(function (json) {
        context.setState({ data: json });
    }).catch((error) => {
        console.log(error);
    })
}