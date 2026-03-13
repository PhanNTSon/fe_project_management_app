import './ProjectList.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProjectCard from '../../components/features/ProjectCard';

const ProjectList = () => {
    // Reusing the same project mock data for consistency
    const projects = [
        {
          id: 1,
          icon: "smartphone",
          iconColorClass: "text-primary bg-blue-50 dark:bg-blue-900/30",
          status: "Updated 2h ago",
          statusColorClass: "text-slate-400 bg-transparent",
          title: "Mobile App Redesign",
          description: "Owner: Sarah Jenkins",
          progress: 75,
          teamMembers: [
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8-AlPjmlWd6cyE5KI1G35hraPOnCivYyRLI9GABy6Av5ZYXnu6j3qv6lve3ZiqBbBAfIfXxldTtIvOb_9d9hWiftgRhn1R_fDp4vmgTp17PDgKRHHzbcYJgU_yqD2ZLeQRPbxt02hNuSuPJk6RWM8yssNmFD2ypCd5eSYpb7G5hkPG5Nq1j9nkrtAO04anSzf1YpbCPC8S5QsA1TY9tD0TpyTbQEkmX-iLuPIH27XTVfqKe7Wh4fwzUnlBJONewe_2oqclc9iV1M" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYbAZLZ-066nycvwSWfOoUiCiuy2xg7s1zimYKa9rjwjJPJoJAF73IHjwHbtxJOknOLlEK6gTwEcHVd-rEwcV2zw-lmQotWSkBFlTxPr0Jyi3fMuQx9c3Q_nlj_FTWwy6Q9TbH9_Gh2ITwGqgS9Glcjb23ocBlaNlnX8obV2TWJfFUpYJSfR7wbcCPSn5yQgpbCYwzaPT0r11wONWYszb5u6xEyGOmSrF8Kk4SJ9S0-8xB3kCyVZQ-fYrD8PVNfF-hyrUHNTp9Kc4" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPXr4qqSqJ52zpWFi7QsbC7TN26Yq9XeF1j5rBJm67fAlmw3q33RfM3CyskpvBL8qjVmpKjTdIIHr38_ji3AUs5GhrMbqTZAgAl9aWxUD0WdlfCm5e_x63pOjI8lnwU9BX8FTZVJgLEsASsOyd_8ngQ3-Mdn7-K8yf4Itp5ud2nHD5KcVY1cD_J9_2ujwvsz-864M_db_aF77dSrIdy0Ytzw-14w-HutXyke6k3qD0YxkMu_eC4qnh_l_RaZlp5ADiuApgh-6rO3Y" },
            {}, {}
          ]
        },
        {
          id: 2,
          icon: "shopping_bag",
          iconColorClass: "text-purple-600 bg-purple-50 dark:bg-purple-900/30",
          status: "Updated 5h ago",
          statusColorClass: "bg-transparent text-slate-400",
          title: "E-commerce Platform",
          description: "Owner: David Miller",
          progress: 32,
          teamMembers: [
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC77rvk4VdBUaULagI4TH5f1yrOax5nyKbRC9vKOWsfHNmn5m4cxPbIL0EnNACjdQI7wACRTjoVcJohL_l1spfpb7WK_TvLujg-8K5fXBGauIoYjIhQFaI0E-bgEV-czBGl4ZxcwbU5zcjOURiMERsxAP34rXWTv6RPTuyxMPhnglp4L4tZZsfbAp9mFD8ooeGil_cTay1fUn2h9pwUCIAPU3i6E0M0VD2GrKdnMoopSEa0zAH4_6Ksb2-IhdcDcTN9keKiKzxb_jM" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBloM0vH5QwBefsM9noXg-FwFLCmKIooNWO55BaX3ZSULxWnx4bvCzYRpEuPR9ggCnvMsEKOrUurFKBtp0tY33xAf9rf9jG4VbQuqpLXMLvuF0NxaF3WqKqc1gU51pZGG9XBrXMnK_0aOmE7UDmkPIFnwP4y6wguY3xsDXWirxa0XfPACMSJW0rHJQ4nvSFkjGzEpkk1PzYIn4TZzP6IGhyMNRcU8V61FRrr2dfFyE_Eb8ZX0CYzFwJibXbBhwB614gbYk4JsWRjCQ" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2bGj0Bj-G5EM8q2vDpPoPdTb6VvXkYofhiL3unMES8Gk0SdwG7fmAWP7uDkd0F-C1fltlZs-7ChnN6qd6vX0WKbi4gn23CeQoJuUGzHHIsC-k82fcSp5R5boveevUVloPh5cBOSvKOcebekVemvdE-qwxGKGlkyMxcYPUMWhG1IRC4A6Ru_z2zw3r7ccmTrw6tkgVLzsebTf2mBkqLWQl5Tkm2wDRrwMCNFQw3sxhp_ozsqPyXoYTaCldecWZoy2uo6LFDrhEMeA" }
          ]
        },
        {
          id: 3,
          icon: "analytics",
          iconColorClass: "text-emerald-600 bg-green-50 dark:bg-green-900/30",
          status: "Updated 1d ago",
          statusColorClass: "bg-transparent text-slate-400",
          title: "Financial Dashboard",
          description: "Owner: Emily Chen",
          progress: 90,
          teamMembers: [
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbtwqKkLFAXYcTJSJ_ppAraj-jeB9jshbGj9eNHZUg9OIMzQstJ6mnbuCE-4WNlSPoHIRPFzVyy1xlRJ7ssR4A-lr1QK0ZHpsh912-x53EwkcJkWknn4wHOTJ6IXUgE_7azdJL03_Xd5C3av8Lfz3goNnh4QdnsFG81ukJB1nbA9BuFhgzqnzh-GGlgdfhi4rD8auVuxPFcn-Riu5ByfPA1XEhebwPo7gaUmgEEQwZ0idROhVY2rDy75-Q2UCSng0jcW2UD5dV5o4" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7OA6aXOXCOOr8lnTb1NkgLNkGKWaoGmvvYXJsC8bDQqnAD3tAQ9nvM5beTBtux-ExFxAcVHFtCIkf6sniq9JKxQAU9KGZEQqVzHxwx-37RhwmiiLC9Xtug-EwmjkLLbYUdsAbCuQS3O9Rv6mar-sni-SHv_mWEss0NqGQzmeBKLn7_RDJXeAvcdfIiPOCKHjHkqnH3_ao8QWimGeSBQVkTLdGI2rlxRDtNjdMNikOOKtWbgiPUUPb5wBm8BCPF0hkYjreFQQS9II" }
          ]
        },
        {
          id: 4,
          icon: "security",
          iconColorClass: "text-orange-600 bg-orange-50 dark:bg-orange-900/30",
          status: "Updated 3h ago",
          statusColorClass: "bg-transparent text-slate-400",
          title: "Security Audit v2",
          description: "Owner: Marcus Thorne",
          progress: 15,
          teamMembers: [
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFvrjwvtYkNpie7HuA84VdFPEDoXLB5Js_HwTeoKtUvFC1zMOGMaQXpYCoMCykpL8Fxx7U_-PhhPrzkOwAqiK08ljD5ivuKxBfxScBe4-8ncf36JSDGk7_3j7S3DVWDyrHBKZfucLov3-agpbN6LN1nTErgEwPXE_-CAXwpX2NNn6RvSRe8Dlax32ej3FrLBFSGSQ1710_B5Oadngr5ihS_B9Zgx7Y2UAYAu84h2lJSeimha2ZtJsiJ2Qy423u6K1EZs4j2PTgJfI" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo6t4oLcyX_BzoUMFgvxnH32XWzcklrXsSJI357wCyoMUqPDQJ_Y2lxk6MWjJkdyTnQATIBky2BEIjp8KygnL8_vFQOXgupaOBFzeJ7Z3HHtMOp99jxShGZefrsti9lFRmUt6Ln7kZNY1CQ3_qf18gwBaF8md-s2W272B6osWkoQxi3YBqfSq5OCwn5wNBm9diWFhne-uxymtXOJ1OjItVC47RBRHQo9QOTqJw-J_uYghNdM13DzVUY2y4640-V2G__XhyNI3Vq28" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxom7xtkQi0_EwllyTPsMiUxcw_beXAHSd-ffZzqCeNQNz0t5yomfOAFockk0bg-KmZNpnRZ4DDhTmysdKAmCvuI26SoGiTnXeCczKH1PuMB56_fX3qbmInutZxGBKfxkclFghafTyIa1MJaky9XX_wWY9URRFkKdZNmQNe7G6UglWGzWkzkOvZ1Iiq1lr1wvxY1usuMTTzT4oCI9Dwbi66mKGSx4OSy1opI_31NQt1KzCfG7OaURuptMw_S-8BTRx8BgyT1qMLc" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzlfEkDWrqWntZFMjvkU6l0-ARShv4GYbWhqD24eiOJStK1TqI6H4TU74mKMP9gKUX7ffrNSylrgPrgRx2MNiD9CZYMc-dAe23p0_U_wNtHMHiy-UyZbitC2is1ZhOIyGn4VJy1njJLWSitCw1yuqObjK_c92JHZs4Baj6qVJEI1q-sSIm0icpx-G1Vj-EqzE0qXGPnJmANqQkHK6Qdk0qgO-tB2HiGQ8_bZsC5nJNoke3Pbz0fHor0sYEjIIerpMTuOcJkRsmAVY" }
          ]
        },
        {
          id: 5,
          icon: "campaign",
          iconColorClass: "text-rose-600 bg-rose-50 dark:bg-rose-900/30",
          status: "Updated 4d ago",
          statusColorClass: "bg-transparent text-slate-400",
          title: "Brand Guidelines",
          description: "Owner: Lydia Vance",
          progress: 55,
          teamMembers: [
             { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOcVIsDp9IMURyeeY-xoUCdx6odI5dtdvxtHTgSVtB5s3WOOdAaRDKk7fyXuJh5cGnzuRGIW9d3NKWEi9BKoLNHlj90MSXlyV6H_mocCUeXRpjqlpOYHsXva7K3YIEChohYQYM4_eiETOxQ34qbxxMvnOytDzUM2Dn8wpKT-w1aj-MXeeZAIJOuJLi7uVFpBx3tjC_B8F3CXHACbgFrzIprqYiSBO1hfeprf56UVx1WjpNaCgtS1vQZ7ZkFRkxzI0Q1_E49aLh1K4" },
             { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0T_DMZhQ3FpiqxkRtkjIWqu5BZVq-18jQLLy1Q603vPTELwNlYNiJGMOTCx6ru9sppBT8lRUXuR2eHGnrCDl61jZQYfeH5CUAbX-qimEvQ2Iy0dI3WO08XGxQx9SAl2kICdhFm4iDpyGEaDkWBkZUC6pWTx4xd0Z9U2Ifp2NhGV3zEJ_nq4ggA0VoICEa11Sbw6Q35xr92LTeE5qG4yWnSu4x69UohIMtYwmBQ87ivV0uPCuo9KJQJJFRRMTm-Ezyzke6W8KnPbk" }
          ]
        },
        {
          id: 6,
          icon: "cloud_sync",
          iconColorClass: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30",
          status: "Updated 2w ago",
          statusColorClass: "bg-transparent text-slate-400",
          title: "Cloud Migration",
          description: "Owner: Tom Wilson",
          progress: 10,
          teamMembers: [
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlXVy5WWkqnmQ-S8BbTniLfnjboQvGbW6y84SAvvAR60ZCSauIiz312QIQ0vJuIFnBs93jyNpvKmGeCpYKlummmCZNA6dh9rSPMr5ZzjjzfHFw9x5e8eojO4apl818dXa2K4-6beMlXX261o2mhRbYpCigKYVaWK9tZrmIE3ekdoq83Q2e2HgzpvxaEZtiTwHEwO3KXg7uG7E520y1EBI036zFpGs0JJiynzVIIpwO8L6roWSf4obQKKOXDNfC4N_bWlB10GLftKM" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN8Cc-kyr-HJRby_C0KB39dz3aSw9J-t1x2U1mZ8KTjfZu1we7MN5_wJPdP28ZbXTXMNnSMvO9R91vGXr3l411VXEM6AibXSwWDJosLk2X14Ax-EcNYzWCQysUmbaR3MxyplnLm_TI3vvPV7gllwUhg-q5n5DAfPpJPraJ2GkyBMQvPAR70a19yZQKMiTjCEeeiKBe2XRSHLdHUh0i2lYfp-D6YBEeSMLuO_XKObr4Q1gWjTianpA01mPlbLiEubHy8tYIFTeDf0I" },
            { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFuGA41fAXWpMBmS1wJXzxZ9udvmfrL94EH_vECVsdToMeMkjiGqdly1iW6SkahybOUQZSQXhpG4l3NgLhY9n21oNLWHJjYzlJLBINllm95fdrM4itLofxUY-AwQ8hKZRlM7ydjXtIwNdUB4K3X08pSP67D-7XVD76E0PJWtRItow2rxP9Bq-DNYduMWw79enqDTZWgXT_b4Y2v-XoOU8ZcpDYhlVlgHSpIPDlknm9z_mJKu0TVnuBg7wgHQ3twjzru7hlt6KYa2g" }
          ]
        }
      ];

  return (
    <DashboardLayout>
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Page Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
            <Link className="flex items-center border-b-2 border-primary text-primary pb-3 font-semibold text-sm" to="#">
                All Projects
            </Link>
            <Link className="flex items-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 hover:text-slate-800 dark:hover:text-slate-200 font-medium text-sm" to="#">
                Recent
            </Link>
            <Link className="flex items-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 hover:text-slate-800 dark:hover:text-slate-200 font-medium text-sm" to="#">
                Archived
            </Link>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2 flex-1">
            {['Category', 'Status', 'Priority'].map(filter => (
              <button key={filter} className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 hover:bg-slate-50 transition-colors">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter}</span>
                <span className="material-symbols-outlined text-slate-400 text-[18px]">keyboard_arrow_down</span>
              </button>
            ))}
          </div>
          <div className="w-full lg:max-w-md">
            <div className="flex w-full items-stretch rounded-lg h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-slate-400 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input 
                className="form-input flex w-full border-none bg-transparent focus:outline-0 focus:ring-0 h-full placeholder:text-slate-400 px-4 pl-2 text-sm font-normal" 
                placeholder="Search by name or owner..." 
              />
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Pagination (Optional Extra) */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-primary text-white font-semibold">1</button>
          <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50">2</button>
          <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50">3</button>
          <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectList;

