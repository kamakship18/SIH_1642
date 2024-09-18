"use client"

import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search, Archive, Trash, Clock, MoreVertical, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 p-4">
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 bg-blue-600 rounded-full mr-2 flex items-center justify-center text-white font-bold">A</div>
      <span className="text-sm font-medium">Alicia Koch</span>
      <ChevronDown className="ml-auto h-4 w-4 text-gray-500" />
    </div>
    {[
      { name: 'Inbox', icon: '📥', count: 128 },
      { name: 'Drafts', icon: '📄', count: 9 },
      { name: 'Sent', icon: '➡️' },
      { name: 'Junk', icon: '🗑️', count: 23 },
      { name: 'Archive', icon: '🗃️' },
      { name: 'Updates', icon: '🔄', count: 342 },
      { name: 'Forums', icon: '💬', count: 128 },

    ].map((item, index) => (
      <div key={item.name} className="flex items-center py-1.5 text-sm">
        <span className="mr-2">{item.icon}</span>
        <span className={index === 0 ? 'font-semibold text-blue-600' : 'text-gray-700'}>{item.name}</span>
        {item.count && (
          <span className="ml-auto text-xs text-gray-500">{item.count}</span>
        )}
      </div>
    ))}
  </div>
);

const EmailList = ({ emails, onSelect, selectedEmail }) => (
  <ScrollArea className="h-[calc(100vh-120px)]">
    {emails.map((email) => (
      <div 
        key={email.id} 
        className={`p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${selectedEmail.id === email.id ? 'bg-blue-50' : ''}`} 
        onClick={() => onSelect(email)}
      >
        <div className="font-semibold text-sm">{email.sender}</div>
        <div className="text-sm font-medium">{email.subject}</div>
        <div className="text-xs text-gray-500 truncate">{email.preview}</div>
        <div className="flex gap-1 mt-1">
          {email.tags.map((tag, index) => (
            <span key={index} className={`text-xs px-2 py-0.5 rounded ${
              tag === 'work' ? 'bg-black text-white' : 
              tag === 'important' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-200 text-gray-700'
            }`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-400 mt-1">{email.date}</div>
      </div>
    ))}
  </ScrollArea>
);

const EmailView = ({ email }) => (
  <div className="p-6 h-full flex flex-col">
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{email.subject}</h2>
        <span className="text-sm text-gray-500">{email.date}</span>
      </div>
      <div className="flex items-center mb-1">
        <div className="w-8 h-8 bg-green-500 rounded-full mr-2 flex items-center justify-center text-white font-bold">
          {email.sender[0].toUpperCase()}
        </div>
        <div>
          <div className="font-semibold">{email.sender}</div>
          <div className="text-sm text-gray-500">Reply-To: {email.replyTo || email.sender}</div>
        </div>
      </div>
    </div>
    <div className="flex-grow text-sm mb-4 overflow-auto">
      <p>{email.body}</p>
    </div>
    <div className="mt-auto">
      <Input 
        type="text" 
        placeholder={`Reply ${email.sender.split(' ')[0]}...`}
        className="mb-2"
      />
      <div className="flex items-center justify-between">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">Send</Button>
        <div className="flex items-center text-gray-500">
          <input type="checkbox" id="muteThread" className="mr-2" />
          <label htmlFor="muteThread" className="text-sm">Mute this thread</label>
        </div>
      </div>
    </div>
  </div>
);

const EmailInbox = () => {
  const [requests] = useState([
    { id: 1, sender: 'William Smith', subject: 'Meeting Tomorrow', preview: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share...", tags: ['meeting', 'work', 'important'] },
    { id: 2, sender: 'Alice Smith', subject: 'Re: Project Update', preview: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a...", tags: ['work', 'important'] },
    { id: 3, sender: 'Bob Johnson', subject: 'Weekend Plans', preview: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor...", tags: ['personal'] },
    { id: 4, sender: 'Emily Davis', subject: 'Re: Question about Budget', preview: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I'v...", tags: ['work', 'budget'] },
    { id: 5, sender: 'Michael Wilson', subject: 'Important Announcement', preview: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the...", tags: ['work'] },
  ]);

  const [selectedEmail, setSelectedEmail] = useState(requests[0]);

  return (
    <div className="flex h-screen bg-white text-gray-900">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <div className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
        <div className="text-xl font-semibold">Inbox</div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost">All mail</Button>
          <Button variant="ghost">Unread</Button>
          <Button variant="ghost"><Archive className="h-5 w-5" /></Button>
          <Button variant="ghost"><Trash className="h-5 w-5" /></Button>
          <Button variant="ghost"><Clock className="h-5 w-5" /></Button>
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search" className="pl-10 w-64" />
          </div>
          <Button variant="ghost"><ChevronLeft className="h-5 w-5" /></Button>
          <Button variant="ghost"><ChevronRight className="h-5 w-5" /></Button>
          <Button variant="ghost"><RotateCcw className="h-5 w-5" /></Button>
          <Button variant="ghost"><MoreVertical className="h-5 w-5" /></Button>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="w-1/3 border-r border-gray-200">
          <EmailList emails={requests} onSelect={setSelectedEmail} selectedEmail={selectedEmail} /> {/* Use `requests` instead of `emails` */}
        </div>
        <div className="flex-1">
          <EmailView email={selectedEmail} />
        </div>
      </div>
    </div>
  </div>
);
};

export default EmailInbox;