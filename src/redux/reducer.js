import { combineReducers } from "redux";
import repositoryReducer from "./repositories/repositoriesReducer";
import modalReducer from "./modal/modalReducer";
import selectedRepoReducer from "./selectedRepo/selectedRepoReducer";
import savedRepoReducer from "./savedRepositories/savedRepositoriesReducer";
import searchReducer from "./repositories/searchCheck/searchReducer";
const rootReducer = combineReducers({
  repositoryList: repositoryReducer,
  modal: modalReducer,
  selectedRepo: selectedRepoReducer,
  savedRepoList: savedRepoReducer,
  searchValue: searchReducer,
});

export default rootReducer;
