require 'spec_helper'

describe 'Landing page' do

  subject do
    page
  end

  before do
    visit root_path
  end

  it 'has description' do
    should have_content <<-DESC
      marbles.mx is intended to turn your technology to work for you.  Instead of tech determining
      how we feel and interact with people, marbles.mx helps
      you interact with unique opportunities, events, and people,
      all to help you live a happier, healthier life.
    DESC
  end

  it 'has title' do
    should have_title 'marbles.mx | get in the mix'
  end

  describe 'signup', :js => true do

    let(:submit) { 'Sign up' }

    describe 'with invalid information' do
      it 'should not create a user' do
        count_before = User.count
        click_button submit
        should have_selector '#messages .alert-danger', text: 'Email is invalid'
        User.count.should == count_before
      end
    end

    describe 'with valid information' do

      before do
        fill_in 'user_email',  with: "usera2@example.com"
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

end

