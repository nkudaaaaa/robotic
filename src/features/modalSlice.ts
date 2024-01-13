/// modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isModalOpen: boolean;
  selectedDirection: string;
}

const initialState: ModalState = {
  isModalOpen: false,
  selectedDirection: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<string>) => {
      state.isModalOpen = !state.isModalOpen;
      state.selectedDirection = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

