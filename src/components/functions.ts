import supabase from './supabase';

export const Signup = async (email: string, password: string) => {
  let { user, error } = supabase.auth.signIn({
    email,
    password,
  });
  if (user) {
    return user;
  } else {
    return false;
  }
};
