import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";

import Link from 'next/link'

export function ButtonLinks() {
	return (
		<div className='flex justify-start space-x-2 text-slate-800'>
			<Link href='https://github.com/zcharz' target="_blank">
				<FaGithub size={30} className='hover:text-slate-50 duration-200'/>
			</Link>

			<Link href='https://www.linkedin.com/in/zhao-charlie/' target="_blank">
				<FaLinkedin size={30} className='hover:text-slate-50 duration-200'/>
			</Link>

			<Link href='https://www.youtube.com/@czmusic_' target="_blank">
				<MdLibraryMusic size={30} className='hover:text-slate-50 duration-200'/>
			</Link>

			<Link href='https://drive.google.com/file/d/1KroZl-79kF2Hltba0qhrsHdcOWxnzYmO/view' target="_blank">
				<IoDocumentText size={30} className='hover:text-slate-50 duration-200'/>
			</Link>

			<Link href='mailto:hellozhaocharlie@gmail.com' target="_blank">
				<RiMailFill size={30} className='hover:text-slate-50 duration-200'/>
			</Link>
		</div>
	)
}

export function ContactLinks() {
	return (
		<div className='flex justify-start space-x-2 text-slate-100'>
			<Link href='https://github.com/zcharz' target="_blank">
				<FaGithub size={30} className='hover:text-rose-400 duration-200'/>
			</Link>

			<Link href='https://www.linkedin.com/in/zhao-charlie/' target="_blank">
				<FaLinkedin size={30} className='hover:text-rose-400 duration-200'/>
			</Link>

			<Link href='https://www.youtube.com/@czmusic_' target="_blank">
				<MdLibraryMusic size={30} className='hover:text-rose-400 duration-200'/>
			</Link>

			<Link href='https://drive.google.com/file/d/1KroZl-79kF2Hltba0qhrsHdcOWxnzYmO/view' target="_blank">
				<IoDocumentText size={30} className='hover:text-rose-400 duration-200'/>
			</Link>

			<Link href='mailto:hellozhaocharlie@gmail.com' target="_blank">
				<RiMailFill size={30} className='hover:text-rose-400 duration-200'/>
			</Link>
		</div>
	)
}