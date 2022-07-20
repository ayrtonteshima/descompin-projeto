import * as types from './types';
import * as pinService from '../services/pinService';

export const openModalSavePinAction = () => ({
  type: types.openModalSavePinType
});

export const openModalCreateFolder = () => ({
  type: types.openModalCreateFolderType
});

export const closeModalsAction = () => ({
  type: types.closeModalsType
});

export const fetchFoldersInitAction = () => ({
  type: types.fetchFoldersInitType
});

export const fetchFoldersSuccessAction = (folders) => ({
  type: types.fetchFoldersSuccessType,
  payload: folders
});

export const fetchFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction());
  const folders = await pinService.getFolders();
  dispatch(fetchFoldersSuccessAction(folders));
};


// ----

export const saveFolderInitAction = () => ({
  type: types.saveFolderInitType
});

export const saveFolderSuccessAction = (folder) => ({
  type: types.saveFolderSuccessType,
  payload: folder
});

export const saveFolderAction = async (dispatch, folderName) => {
  dispatch(saveFolderInitAction());
  const newFolder = await pinService.saveFolder(folderName);
  dispatch(saveFolderSuccessAction(newFolder));
};

