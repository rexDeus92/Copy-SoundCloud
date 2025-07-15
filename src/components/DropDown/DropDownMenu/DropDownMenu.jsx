import { useState } from 'react';
import {
  User,
  Heart,
  List,
  Radio,
  UserPlus,
  Star,
  Music,
  Share,
  ChevronDown,
} from 'lucide-react';
import s from './DropDownMenu.module.scss';

export default function DropdownMenu({
  currentUser = {
    name: 'Current User',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  suggestedUsers = [
    {
      id: '1',
      name: 'Hamper',
      avatar: '/placeholder.svg?height=40&width=40',
      followers: 1289,
      isVerified: true,
    },
    {
      id: '2',
      name: 'sleazy',
      avatar: '/placeholder.svg?height=40&width=40',
      followers: 780,
    },
    {
      id: '3',
      name: 'xspanse',
      avatar: '/placeholder.svg?height=40&width=40',
      followers: 177,
    },
  ],
  likesCount = 43,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [followedUsers, setFollowedUsers] = useState(new Set());

  const toggleFollow = userId => {
    setFollowedUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const formatFollowers = count => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const menuItems = [
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Heart, label: 'Likes', href: '/likes' },
    { icon: List, label: 'Playlists', href: '/playlists' },
    { icon: Radio, label: 'Stations', href: '/stations' },
    { icon: UserPlus, label: 'Who to follow', href: '/discover' },
    { icon: Star, label: 'Try Artist Pro', href: '/pro', highlight: true },
    { icon: Music, label: 'Tracks', href: '/tracks' },
    { icon: Share, label: 'Distribute', href: '/distribute' },
  ];

  return (
    <div className={s.relative}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <img
          src={currentUser.avatar || '/placeholder.svg'}
          alt={currentUser.name}
          className='w-8 h-8 rounded-full object-cover'
        />
        <ChevronDown
          className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 z-40'
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Content */}
          <div className='absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden'>
            {/* Suggested Users Section */}
            <div className='p-4 border-b border-gray-200 dark:border-gray-700'>
              <div className='space-y-3'>
                {suggestedUsers.map(user => (
                  <div
                    key={user.id}
                    className='flex items-center justify-between'
                  >
                    <div className='flex items-center gap-3'>
                      <img
                        src={user.avatar || '/placeholder.svg'}
                        alt={user.name}
                        className='w-10 h-10 rounded-full object-cover'
                      />
                      <div>
                        <div className='flex items-center gap-1'>
                          <span className='font-medium text-gray-900 dark:text-white'>
                            {user.name}
                          </span>
                          {user.isVerified && (
                            <div className='w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center'>
                              <div className='w-2 h-2 bg-white rounded-full' />
                            </div>
                          )}
                        </div>
                        <div className='flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400'>
                          <User className='w-3 h-3' />
                          <span>{formatFollowers(user.followers)}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFollow(user.id)}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                        followedUsers.has(user.id)
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                    >
                      {followedUsers.has(user.id) ? 'Following' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Likes Section */}
            <div className='px-4 py-3 border-b border-gray-200 dark:border-gray-700'>
              <div className='text-sm font-medium text-gray-900 dark:text-white'>
                {likesCount} LIKES
              </div>
            </div>

            {/* Menu Items */}
            <div className='py-2'>
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:bg-gray-50 dark:focus-visible:bg-gray-800 ${
                      item.highlight
                        ? 'text-orange-500 hover:text-orange-600'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className='w-4 h-4' />
                    <span className='font-medium'>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
