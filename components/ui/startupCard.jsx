import React, { useState } from 'react';
import axios from 'axios';
import { Heart, MessageCircle, DollarSign, Star, TrendingUp, PieChart, BarChart, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const StartupCard = ({ startup }) => {
  const [likes, setLikes] = useState(startup.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState('');
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLikes(likes + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };

  const handleFundRequest = async () => {
    try {
      await axios.post('/newRequest', { startupId: startup.id, message });
      alert('Your funding request has been sent successfully!');
      setShowConfirmation(false);
      setMessage('');
    } catch (error) {
      console.error('Error sending funding request:', error);
      alert('There was an error sending your request. Please try again.');
    }
  };

  const handleComment = async () => {
    // Implement comment submission logic here
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-3/4 transform transition duration-300 hover:shadow-xl mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative">
          {startup.videoUrl ? (
            <video className="w-full h-full object-cover" controls>
              <source src={startup.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
            width={500}
            height={500} 
              src={startup.imageUrl || "/api/placeholder/400/300"} 
              alt={startup.name} 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            {startup.category}
          </div>
        </div>
        <div className="md:w-3/5 p-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">{startup.name}</h2>
          <p className="text-lg text-gray-600 mb-2">Founded by {startup.founder}</p>
          <p className="text-gray-700 mb-4">{startup.description}</p>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-4 mb-2">
              <button 
                onClick={handleLike} 
                className={`flex items-center ${isLiked ? 'text-red-500' : 'text-gray-600'} transition-all duration-300 transform hover:scale-110`}
              >
                <Heart size={24} className={`${isLiked ? 'fill-current' : ''} transition-transform duration-300 ${isLiked ? 'scale-125' : 'scale-100'}`} />
                <span className="ml-1 text-lg">{likes}</span>
              </button>
              <div className="flex items-center text-gray-600">
                <MessageCircle size={24} />
                <span className="ml-1 text-lg">{startup.feedbacks}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white transition-colors duration-300">
                    Review
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-blue-800">{startup.name} - Investor Review</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Founder: {startup.founder}</h3>
                      <p className="mb-4">{startup.fullDescription}</p>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={i < Math.floor(startup.rating) ? "text-yellow-400" : "text-gray-300"} size={24} />
                        ))}
                        <span className="ml-2 text-gray-600 text-lg">({startup.rating.toFixed(1)})</span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Key Metrics:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ROI: <span className="font-bold text-green-600">{startup.roi}%</span></li>
                        <li>Profit Margin: <span className="font-bold text-blue-600">{startup.profitMargin}%</span></li>
                        <li>Market Share: <span className="font-bold text-purple-600">{startup.marketShare}%</span></li>
                        <li>Year-over-Year Growth: <span className="font-bold text-red-600">{startup.yoyGrowth}%</span></li>
                      </ul>
                      <h4 className="font-semibold text-lg mt-4 mb-2">Competitive Advantage:</h4>
                      <p>{startup.competitiveAdvantage}</p>
                      <h4 className="font-semibold text-lg mt-4 mb-2">Future Projections:</h4>
                      <p>{startup.futureProjections}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Revenue Growth</h4>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={startup.revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                      <h4 className="font-semibold text-lg mt-6 mb-2">Market Opportunity:</h4>
                      <p>{startup.marketOpportunity}</p>
                      <h4 className="font-semibold text-lg mt-4 mb-2">Recent Investor Reviews:</h4>
                      <ul className="space-y-3 max-h-60 overflow-y-auto">
                        {startup.reviews.map((review, index) => (
                          <li key={index} className="bg-gray-100 p-3 rounded">
                            <p className="text-sm mb-1">{review.comment}</p>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} size={16} />
                              ))}
                              <span className="ml-2 text-sm text-gray-600">- {review.investor}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog open={showConfirmation} onOpenChange={setShowConfirmation} className="bg-white" >
                <DialogTrigger asChild>
                  <Button className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">
                    Fund
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle>Confirm Funding Request for {startup.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="mb-4">Are you sure you want to connect with {startup.name} for funding?</p>
                    <Textarea
                      placeholder="Enter a message for the startup (optional)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mb-4"
                      rows={4}
                    />
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowConfirmation(false)}>Cancel</Button>
                    <Button onClick={handleFundRequest} className="bg-green-500 text-white hover:bg-green-600">
                      Confirm
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-lg mb-2">Leave a Comment:</h4>
            <div className="flex">
              <Input
                placeholder="Your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button onClick={handleComment} className="bg-blue-500 text-white hover:bg-blue-600">
                <Send size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;