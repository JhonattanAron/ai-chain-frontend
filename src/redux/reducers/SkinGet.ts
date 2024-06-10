import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface SkinState {
    skin_uuid: string;
    error: string | null;
}

const initialState: SkinState = {
    skin_uuid: "steve",
    error: null
};

// Define el thunk para realizar la operación asíncrona
export const fetchSkinData = createAsyncThunk(
    'SkinGet/fetchSkinData',
    async (userId: string) => {
        const response = await fetch(`http://localhost:8085/get_skin_data/${userId}`);
        if (!response.ok) {
            throw new Error('Error fetching skin data');
        }
        const data = await response.json();
        return data;
    }
);

const SkinGet = createSlice({
    name: "SkinGet",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSkinData.fulfilled, (state, action: PayloadAction<string>) => {
            state.skin_uuid = action.payload;
            state.error = null;
        });
        builder.addCase(fetchSkinData.rejected, (state, action) => {
            state.error = action.error.message || 'Failed to fetch skin data';
        });
    }
});

export const { setError } = SkinGet.actions;
export default SkinGet.reducer;
