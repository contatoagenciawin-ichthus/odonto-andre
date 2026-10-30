import "server-only";
import { createClient } from "@supabase/supabase-js";
export type LeadInput = { name:string; phone:string; city:"Americana"|"Caconde"; marketingConsent:boolean; sourcePage:string; utmSource?:string; utmMedium?:string; utmCampaign?:string; leadToken:string };
export async function saveLead(data:LeadInput){
 const url=process.env.SUPABASE_URL, key=process.env.SUPABASE_SECRET_KEY;
 if(!url||!key) throw new Error("LEAD_STORAGE_NOT_CONFIGURED");
 const db=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}});
 const {error}=await db.from("leads").insert({name:data.name,phone:data.phone,city:data.city,marketing_consent:data.marketingConsent,marketing_consent_at:data.marketingConsent?new Date().toISOString():null,source_page:data.sourcePage,utm_source:data.utmSource||null,utm_medium:data.utmMedium||null,utm_campaign:data.utmCampaign||null,lead_token:data.leadToken,status:"new"});
 if(error) throw new Error("LEAD_INSERT_FAILED");
}
