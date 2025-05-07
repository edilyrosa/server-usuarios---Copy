// supabaseClient.js
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config();
// Ahora puedes acceder a las variables con process.env
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
