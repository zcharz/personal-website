import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

import Link from 'next/link'

export default function ButtonLinks() {
	return (
		<div className='flex justify-start space-x-2'>
			<Link href='https://github.com/zcharz' target="_blank">
				<FaGithub size={25} className='text-slate-700 d hover:text-slate-100 duration-200'/>
			</Link>

			<Link href='https://www.linkedin.com/in/zhao-charlie/' target="_blank">
				<FaLinkedin size={25} className='text-slate-700 d hover:text-slate-100 duration-200'/>
			</Link>

			<Link href='https://www.youtube.com/@czmusic_' target="_blank">
				<MdLibraryMusic size={25} className='text-slate-700 d hover:text-slate-100 duration-200'/>
			</Link>

			<Link href='mailto:hellozhaocharlie@gmail.com' target="_blank">
				<IoDocumentText size={25} className='text-slate-700 d hover:text-slate-100 duration-200'/>
			</Link>
		</div>
	)
}