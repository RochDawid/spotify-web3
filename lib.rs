use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_spl::token::{self, Token};
use std::mem::size_of;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("B16QWgrXog4fKyWaDsWLwRWoG8qVNj95Rqho5SvmkbNr");

const TEXT_LENGTH: usize = 255;

#[program]
mod spotify_web3 {
    use super::*;
    
    pub fn accept_payment(ctx: Context<PayerContext>) -> ProgramResult {
        let payer_wallet = &mut ctx.accounts.payer_wallet;
        payer_wallet.wallet = ctx.accounts.authority.key();
        
        let ix = anchor_lang::solana_program::system_instruction::transfer(
            &ctx.accounts.authority.key(),
            &ctx.accounts.receiver.key(),
            100000000
        );
        anchor_lang::solana_program::program::invoke(
            &ix, 
            &[
                ctx.accounts.authority.to_account_info(),
                ctx.accounts.receiver.to_account_info(),
            ]
        )
    }

    pub fn create_music(ctx: Context<CreateMusic>, title: String, artist: String, artist_photo_url: String, cover_url: String, music_url: String) -> ProgramResult {
        let music = &mut ctx.accounts.music;
        music.authority = ctx.accounts.authority.key();
        music.title = title;
        music.artist = artist;
        music.artist_photo_url = artist_photo_url;
        music.cover_url = cover_url;
        music.music_url = music_url;

        Ok({})
    }
}

#[derive(Accounts)]
pub struct PayerContext<'info> {
    #[account(
        init,
        seeds = [b"payer".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<PayerAccount>() + 8
    )]
    pub payer_wallet: Account<'info, PayerAccount>,
    
    #[account(mut)]
    pub receiver: AccountInfo<'info>,

    // Authority (signer who paid the transaction fee)
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: UncheckedAccount<'info>,

    // Token Program
    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    // Clock to save time
    pub clock: Sysvar<'info, Clock>
}

#[account]
pub struct PayerAccount {
    pub wallet: Pubkey,
}

// CreateMusic Context
#[derive(Accounts)]
pub struct CreateMusic<'info> {
    #[account(
        init,
        seeds = [b"music".as_ref(), randomkey.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<MusicAccount>() + TEXT_LENGTH*5 + 8
    )]
    pub music: Account<'info, MusicAccount>,

    #[account(mut)]
    pub randomkey: AccountInfo<'info>,

    // Authority (signer who paid the transaction fee)
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: UncheckedAccount<'info>,

    // Token Program
    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,
    
    // Clock to save time
    pub clock: Sysvar<'info, Clock>
}

#[account]
pub struct MusicAccount {
    pub authority: Pubkey,
    pub title: String,
    pub artist: String,
    pub artist_photo_url: String,
    pub cover_url: String,
    pub music_url: String,
}
