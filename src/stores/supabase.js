import 'react-native-url-polyfill/auto';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://yxzbkxbgutkyqlbkybys.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4emJreGJndXRreXFsYmt5YnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NzU1OTIsImV4cCI6MjAxMTM1MTU5Mn0.IGHe2UCGVDY79jBUrg60WB4ZknrL_rnnfHqKndjhi20';

export const supabase = createClient(supabaseUrl, supabaseKey);