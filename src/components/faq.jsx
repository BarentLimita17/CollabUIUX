import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div className='flex flex-col pb-[150px] px-[25%]'>
      <div className='flex flex-col items-center text-[#2D2D2D] font-bold pb-20 text-2xl'>
        Frequently Asked Question
      </div>
      <div className='pt-[30px]'>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1-content"
          // id="panel1-header"
          >
            <Typography>Bagaimana cara saya mengunduh aplikasi MyPertamina ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Pada halaman ini carilah tombol "Download", lalu klik berdasarkan opsi perangkat yang sesuai dengan perangkat anda. Anda akan diarahkan ke App Store(iOS) atau Play Store (Android), di mana anda dapat langsung mengunduh myPertamina.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='pt-[30px]'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel2-content"
          // id="panel2-header"
          >
            <Typography>Device apa saja yang dapat saya gunakan untuk mengakses aplikasi MyPertamina</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Aplikasi myPertamina hanya ekslusif untuk perangkat smartphone iPhone atau Android
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='pt-[30px]'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel2-content"
          // id="panel2-header"
          >
            <Typography>Apa yang bisa saya lakukan jika membutuhkan panduan atau dukungan tambahan mengenai aplikasi MyPertamina</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Anda dapat menghubungi call center pertamina di 135, atau dengan mengirimkan pertanyaan di email kami di pcc135@pertamina.com
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='pt-[30px]'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel2-content"
          // id="panel2-header"
          >
            <Typography>Data apa saja yang dikumpulkan MyPertamina dan apa alasan pengumpulan</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              PT. Pertamina (Persero) selayak pengembang, mengindikasikan bahwa praktik privasi dari aplikasi myPertamina menyertakan penanganan data seperti fitur yang anda gunakan dan umur. Untuk informasi lebih lanjut kebijakan privasi pengembang.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

// 'use client'
// import React from 'react';
// import { Accordion } from 'flowbite-react';

// export default function SectionFaq() {
//   return (
//     <div className='flex flex-col pb-[30px] px-[25%]'>
//     <Accordion collapseAll>
//       <Accordion.Panel>
//         <Accordion.Title className='p-[30px]'>Bagaimana cara saya mengunduh aplikasi MyPertamina ?</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Pada halamann ini carilah tombol "Download", lalu klik berdasarkan opsi perangkat yang sesuai dengan perangkat anda. Anda akan diarahkan ke App Store(iOS) atau play store (Android), di mana anda dapat langsung mengunduh myPertamina.
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <hr></hr><hr></hr><hr></hr>
//       <Accordion.Panel>
//         <Accordion.Title>Device apa saja yang dapat saya gunakan untuk mengakses aplikasi MyPertamina</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Aplikasi myPertamina hanya ekslusif untuk perangkat smartphone iPhone atau Android
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <hr></hr><hr></hr><hr></hr>
//       <Accordion.Panel>
//         <Accordion.Title>Apa yang bisa saya lakukan jika membutuhkan panduan atau dukungan tambahan mengenai aplikasi MyPertamina</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Anda dapat menghubungi call center pertamina di 135, atau dengan mengirimkan pertanyaan di email kami di pcc135@pertamina.com
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <hr></hr><hr></hr><hr></hr>
//       <Accordion.Panel>
//         <Accordion.Title>Data apa saja yang dikumpulkan MyPertamina dan apa alasan pengumpulan</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             PT. Pertamina (Persero) selayak pengembang, mengindikasikan bahwa praktik privasi dari aplikasi myPertamina menyertakan penanganan data seperti fitur yang anda gunakan dan umur. Untuk informasi lebih lanjut kebijakan privasi pengembang.
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <hr></hr><hr></hr><hr></hr>
//     </Accordion>
//     </div>
//   );
// }

