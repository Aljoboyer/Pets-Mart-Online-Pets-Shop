import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { PetObjData } from '../../Components/UserPages/Allpets/PetModel';
import { PetTypeData } from '../../Components/UserPages/Dogs/FindDog/FindDog';
import { CartData } from '../../Components/UserPages/Payments/Checkoutform';
import {OrderModels} from '../../Components/UserPages/PetOrderDetails/OrderModel';
import { PetOrderData } from '../../Components/UserPages/PetOrderDetails/PetOrderDetails';
import { SearchData } from '../../Components/UserPages/UserHome/PetSearchForm/PetSearchForm';

// const BASE_URL = 'https://pets-mart-server-9yrp.vercel.app'
const BASE_URL = 'http://localhost:5000'

//posting Pets data to database
export const PostPets = createAsyncThunk(
  'Pets/postPets',
  async (fd: BodyInit | null | undefined) => {
    const response = await fetch(`${BASE_URL}/Petspost`,{
      method: 'POST',
      body: fd 
    }).then(res=> res.json()).catch(error => {
      Swal.fire(
        'Error!',
        'Something Wrong In Posting',
        'error'
      )
  });
    return response
  }
)
//Geting Pets data from database
export const GetAllPets = createAsyncThunk(
  'Pets/getAllPets',
  async () => {
    
    const response = await fetch(`${BASE_URL}/GetAllPets`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Geting Pets data from database
export const GetAllAccessories = createAsyncThunk(
  'Pets/getAllAccessories',
  async () => {
    const response = await fetch(`${BASE_URL}/getAllAccessories`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
) 

//Posting pet data from database
export const PostCart = createAsyncThunk(
  'Pets/postCart',
  async (data:  BodyInit | null | undefined | OrderModels[] ) => {
    console.log('cart',data)
    const response: {} = await fetch(`${BASE_URL}/PostCart`,{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Pet order posting from database
export const PetOrderPost = createAsyncThunk(
  'Pets/petOrderPost',
  async (data:  BodyInit | null | undefined | PetOrderData ) => {

    const response: {} = await fetch(`${BASE_URL}/PetOrderPost`,{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Geting Pets data from database
export const GetAllData = createAsyncThunk(
  'Pets/getAllData',
  async () => {
    const response = await fetch(`${BASE_URL}/GetAllData`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Geting accessories order from database
export const GetAccessoriesOrder = createAsyncThunk(
  'Pets/getAccessoriesOrder',
  async (email: string | null | undefined) => {
    const response = await fetch(`${BASE_URL}/GetAccessoriesOrder?email=${email}`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//user geting their pet order
export const GetPetOrder = createAsyncThunk(
  'Pets/getPetOrder',
  async (email: string | null | undefined) => {
    const response = await fetch(`${BASE_URL}/GetPetOrder?email=${email}`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Delete pet order from database
export const PetOrderDelete = createAsyncThunk(
  'Pets/petOrderDelete',
  async (id: string) => {

    const response = await fetch(`${BASE_URL}/PetOrderDelete/${id}`,{
      method: 'DELETE'
    }).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Delete Accessories order from database
export const AccessoriesOrderDelete = createAsyncThunk(
  'Pets/accessoriesOrderDelete',
  async (id: string) => {

    const response = await fetch(`${BASE_URL}/accessoriesOrderDelete/${id}`,{
      method: 'DELETE'
    }).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Geting specific types pets
export const GetPetsType = createAsyncThunk(
  'Pets/petPetsType',
  async (data: PetTypeData  | string) => {
    const response = await fetch(`${BASE_URL}/GetPetsType?filterdata=${data}`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Admin all pets order
export const GetAllPetOrder = createAsyncThunk(
  'Pets/getAllPetOrder',
  async () => {
    const response = await fetch(`${BASE_URL}/GetAllPetOrder`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Admin accepting pet order
export const AcceptPet = createAsyncThunk(
  'Pets/acceptPet',
  async (id: string) => {
    const response = await fetch(`${BASE_URL}/AcceptPet/${id}`,{
      method: 'PUT'
    }).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
//Admin geting all accessories order pet order
export const GetAllAccessoriesOrder = createAsyncThunk(
  'Pets/getAllAccessoriesOrder',
  async () => {
   
    const response = await fetch(`${BASE_URL}/GetAllAccessoriesOrder`).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  } 
)
//Admin making another amdin
export const MakeAnAdmin = createAsyncThunk(
  'Pets/makeAdmin',
  async (email: string) => {
    const response = await fetch(`${BASE_URL}/MakeAnAdmin?email=${email}`,{
      method: 'PUT'
    }).then(res=> res.json()).catch(error => {console.log(error)});
    return response
  }
)
// Define a type for the slice state
interface PetState {
  petamount: number
  allpets: PetObjData[]
  allAccessories: PetObjData[]
  totalamont: number,
  carts: OrderModels[],
  alldata: PetObjData[],
  accessoriesOrder: CartData[],
  petorder: PetOrderData[],
  allsearchdata: PetObjData[],
  petstype: PetObjData[]
}

// Define the initial state using that type
const initialState: PetState = {
  petamount: 0,
  allpets: [],
  allAccessories: [],
  totalamont: 0,
  carts: [],
  alldata: [],
  accessoriesOrder: [],
  petorder: [],
  allsearchdata: [],
  petstype: []
}

export const PetReducer = createSlice({
  name: 'Pets',
  initialState,

  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.petamount += 1;
      state.totalamont = state.petamount * action.payload
    },
    decrement: (state, action: PayloadAction<number>) => {
      if(state.petamount > 0)
      {
        state.petamount -= 1;
        state.totalamont = state.petamount * action.payload
      }
    },
    addCart: (state, action: PayloadAction<OrderModels>) => {
      state.carts.push(action.payload);
      state.petamount = 0;
      state.totalamont = 0;
    },
    RemoveItemFromCart: (state, action: PayloadAction<string | undefined>) => {
      state.carts = state.carts.filter(cart => cart._id !== action.payload)
    },
    ClearCart: (state, action: PayloadAction<undefined>) => {
      state.carts = []
    },
    FindData: (state, action: PayloadAction<SearchData | undefined>) => {
      state.allsearchdata = state.allpets.filter(pet => pet.age === action?.payload?.age && pet.gender === action?.payload.gender && pet.type === action?.payload.type) 
    }
  },

  extraReducers: (builder) => {
    builder.addCase(PostPets.fulfilled, (state, action) => {
      Swal.fire(
        'Pets Added Succesfully',
        '',
        'success'
      )
    })
    builder.addCase(GetAllPets.fulfilled, (state, action: PayloadAction<PetObjData[]>) => {
      state.allpets = action.payload
    })
    builder.addCase(GetAllAccessories.fulfilled, (state, action: PayloadAction<PetObjData[]>) => {
      state.allAccessories = action.payload
    })
    builder.addCase(PostCart.fulfilled, (state, action) => {
      state.carts = []
      
    })
    builder.addCase(PetOrderPost.fulfilled, (state, action) => {
      Swal.fire(
        'Pets Ordered Succesfully',
        '',
        'success'
      )
      
    })
    builder.addCase(GetAllData.fulfilled, (state, action: PayloadAction<PetObjData[]>) => {
      state.alldata = action.payload
    })
    builder.addCase(GetAccessoriesOrder.fulfilled, (state, action: PayloadAction<CartData[]>) => {
      state.accessoriesOrder = action.payload
    })
    builder.addCase(GetPetOrder.fulfilled, (state, action: PayloadAction<PetOrderData[]>) => {
      state.petorder = action.payload
    })
    builder.addCase(PetOrderDelete.fulfilled, (state, action) => {
      Swal.fire(
        'Order Deleted Succesfully',
        '',
        'success'
      )
    })
    builder.addCase(AccessoriesOrderDelete.fulfilled, (state, action) => {
      Swal.fire(
        'Order Deleted Succesfully',
        '',
        'success'
      )
    })
    builder.addCase(GetPetsType.fulfilled, (state, action: PayloadAction<PetObjData[]>) => {
        state.petstype = action.payload
    })
    builder.addCase(GetAllPetOrder.fulfilled, (state, action: PayloadAction<PetOrderData[]>) => {
      state.petorder = action.payload
    })
    builder.addCase(AcceptPet.fulfilled, (state, action) => {
      Swal.fire(
        'Order Accepted Succesfully',
        '',
        'success'
      )
    })
    builder.addCase(GetAllAccessoriesOrder.fulfilled, (state, action: PayloadAction<CartData[]>) => {
      state.accessoriesOrder = action.payload
    })
    builder.addCase(MakeAnAdmin.fulfilled, (state, action) => {
      Swal.fire(
        'Admin Maked Succesfully',
        '',
        'success'
      )
    })
  },
});

export const { increment, decrement, addCart, RemoveItemFromCart, ClearCart, FindData } = PetReducer.actions;

export default PetReducer.reducer;
