import { Lusitana, Montserrat, Libre_Baskerville } from 'next/font/google'
import { normalize } from 'path'

export const montserrat = Montserrat({ subsets: ['latin'] })
export const libre_baskerville = Libre_Baskerville({
    weight: ['400', '700'],
     subsets: ['latin'],
     style: ['normal']
      
    })
export const lusitana = Lusitana ({
    weight: ['400', '700'],
     subsets: ['latin'] 
    })