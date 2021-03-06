require 'spec_helper'

describe 'Landing page' do

  subject do
    page
  end

  before do
    visit root_path
  end
  
##  describe 'signup fixed', :js => true do

##    let(:submit) { 'submit-fixed' }
    
##    before do
##      page.driver.resize_window(500, 500)
##      page.execute_script "window.scrollBy(0, window.innerHeight + 500)"
##    end

##   describe 'with invalid information' do
##     it 'should not create a user' do
##        count_before = User.count
##        click_button submit
##        should have_selector '#messages .alert-danger', text: 'Email is invalid'
##        User.count.should == count_before
##      end
##    end

##    describe 'with valid information' do

##    before do
##      fill_in 'user-email-fixed',  with: "usera2@example.com"
##    end

##      it 'should create a user' do
##        count_before = User.count
##        click_button submit
##        should have_selector '#messages .alert-success', text: "Sucess! We'll keep you posted."
##        User.count.should == count_before + 1
##      end

##      it 'should not allow duplicates' do
##        count_before = User.count
##        click_button submit
##        should have_selector '#messages .alert-success', text: "Sucess! We'll keep you posted."
##        click_button submit
##        should have_selector '#messages .alert-danger', text: "Email has already been taken"
##        User.count.should == count_before + 1
##      end

##    end

##  end

   describe 'signup secondary', :js => true do

     let(:submit) { 'submit-secondary' }
    
    before do
      page.driver.resize_window(500, 500)
    end

##    describe 'with invalid information' do
##      it 'should not create a user' do
##        count_before = User.count
##        click_button submit
##        should have_selector '#messages .alert-danger', text: 'Email is invalid'
##        User.count.should == count_before
##      end
##    end

    describe 'with valid information' do

      before do
        fill_in 'user-email-secondary',  with: "usera2@example.com"
     end

      it 'should create a user' do
        count_before = User.count
        click_button submit
        should have_selector '#messages .alert-success', text: "Sucess! We'll keep you posted."
        User.count.should == count_before + 1
      end

      it 'should not allow duplicates' do
        count_before = User.count
        click_button submit
        should have_selector '#messages .alert-success', text: "Sucess! We'll keep you posted."
        click_button submit
        should have_selector '#messages .alert-danger', text: "Email has already been taken"
        User.count.should == count_before + 1
      end

    end

  end
  
  it 'has title' do
    should have_title 'marbles.mx | live skillfully.'
  end

  it 'has description' do
    should have_content <<-DESC
the easiest self-development
    DESC
  end

end
