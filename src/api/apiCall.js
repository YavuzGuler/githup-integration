import axios from "axios";
const BASEPATH = "https://api.github.com/";
export const getProjectWithName = async (
  projectName,
  page = 1,
  per_page = 10
) => {
  const response = await axios
    .get(
      `${BASEPATH}search/repositories?q=${projectName}&page=${page}&per_page=${per_page}`
    )
    .then((response) => response.data.items)
    .catch((error) => {
      throw error;
    });
  return response;
};

export const getCommits = async (projectName, branch = null) => {
  var response;
  if (branch !== null) {
    response = await axios
      .get(`${BASEPATH}repos/${projectName}/commits/${branch}`)
      .then((response) => {
        var array = [];
        array.push(response.data);
        return array;
      })
      .catch((error) => {
        throw error;
      });
  } else {
    response = await axios
      .get(`${BASEPATH}repos/${projectName}/commits`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  return response;
};
export const getStatuses = async (projectName, branch) => {
  var response;

  response = await axios
    .get(`${BASEPATH}repos/${projectName}/statuses/${branch}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });

  return response;
};
export const getProjectWithFullName = async (projectName) => {
  const response = await axios
    .get(`${BASEPATH}repos/${projectName}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
  return response;
};

export const getBranches = async (projectFullName, page = 1, per_page = 10) => {
  const response = await axios
    .get(`${BASEPATH}repos/${projectFullName}/branches`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
  return response;
};
