require 'spec_helper'



describe "Landing page" do 
  
  subject { page }
  
  before { visit root_path }
  
  it { should have_content('marbles.mx is intended to turn your technology to work for you.  Instead of tech determining 
                              how we feel and interact with people, marbles.mx helps 
                              you interact with unique opportunities, events, and people, 
                              all to help you live a happier, healthier life.') } 
  
  it { should have_title('marbles.mx | get in the mix') }
=begin
  describe "signup" do
     
    before { visit root_path }
     
    let(:submit) { "Sign up" }
     
    describe "with invalid information" do
      it "should not create a user" do
        expect { click_button submit }.not_to change(User, :count)
        it {should have_selector('div.alert.alert-danger', text: 'Email is invalid')}
      end
    end
        
    describe "with valid information" do
      before do    
        fill_in "email",  with: "usera2@example.com"   
      end
    
      it "should create a user" do
        expect { click_button submit }.to change(User, :count).by(1)
        it {should have_selector('div.alert.alert-success', text: "Success! We'll keep you posted")}
      end
   end  
 end 
=end  
                                                   
end

